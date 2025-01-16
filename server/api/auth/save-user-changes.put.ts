import { pool } from '~~/server/utils/db';
import argon2 from 'argon2';
import { safeParse } from 'valibot';
import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';
import { UserFirstnameSchema, UserLastnameSchema, UserPasswordSchema } from '~/utils/schemas';

export default defineEventHandler(async event => {
    const body = await readBody(event);

    const { firstname, lastname, password, confirmPassword, userId } = body.userChanges;

    if (firstname) {
        const res = safeParse(UserFirstnameSchema, { firstname });
        if (!res.success) {
            throw createError({
                status: 400,
                statusMessage: 'Validation error: Invalid first name format',
            });
            return { message: 'Invalid first name format' };
        }
    }
    if (lastname) {
        const res = safeParse(UserLastnameSchema, { lastname });
        if (!res.success) {
            throw createError({
                status: 400,
                statusMessage: 'Validation error: Invalid last name format',
            });
            return { message: 'Invalid last name format' };
        }
    }

    if (password || confirmPassword) {
        const res = safeParse(UserPasswordSchema, { password, confirmPassword });
        if (!res.success) {
            throw createError({
                status: 400,
                statusMessage: 'Invalid password format or passwords do not match',
            });
        }
    }

    const conn = await pool.connect();

    try {
        let hashedPassword = null;

        if (password) {
            const res = await conn.query('SELECT password from users WHERE id = $1', [userId]);

            if (res.rows.length === 0) {
                throw CreateError({
                    status: 404,
                    statusMessage: 'User Not Found',
                });
            }

            const currentHashedPassword = res.rows[0].password;

            const isSamePassword = await argon2.verify(currentHashedPassword, password);

            if (isSamePassword) {
                throw createError({
                    status: 400,
                    statusMessage: "You can't use a password you've already been using",
                });
            }
            hashedPassword = await argon2.hash(password);
        }

        if (firstname) {
            await conn.query('UPDATE users SET firstname = $1 WHERE id = $2', [firstname, userId]);
            setResponseStatus(event, 200, 'Firstname changed successfully');
            return { message: 'Firstname changed successfully' };
        }
        if (lastname) {
            await conn.query('UPDATE users SET lastname = $1 WHERE id = $2', [lastname, userId]);
            setResponseStatus(event, 200, 'Lastname changed successfully');
            return { message: 'Lastname changed successfully' };
        }
        if (password) {
            await conn.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, userId]);
            setResponseStatus(event, 200, 'Password changed successfully');
            return { message: 'Password changed successfully' };
        }
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;
        throw createError({
            status: 500,
            statusMessage: err.message || 'Server error',
        });
    }
});
