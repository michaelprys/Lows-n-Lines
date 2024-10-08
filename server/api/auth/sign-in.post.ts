import { pool } from '~~/server/utils/db';
import argon2 from 'argon2';
import { SignInSchema } from '~/utils/schemas';
import { safeParse } from 'valibot';
import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export default defineEventHandler(async event => {
    const body = await readBody(event);

    const validation = safeParse(SignInSchema, body);

    if (!validation.success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Validation error',
            message: `Validation error: ${validation.issues.map(
                (issue, idx) => `${idx + 1} ${issue.message}`
            )}`,
        });
    }

    const { email, password } = body;
    const conn = await pool.connect();

    try {
        const res = await conn.query(
            'SELECT id, email, password FROM users WHERE email = $1',
            [email]
        );

        if (res.rows.length > 0) {
            const user = res.rows[0];
            const hashedPassword = user.password;
            const isVerified = await argon2.verify(hashedPassword, password);

            if (isVerified) {
                await setUserSession(event, {
                    user: {
                        id: user.id,
                        email: user.email,
                    },
                });

                setResponseStatus(event, 200, 'Signed in successfully');
                return { message: 'Signed in successfully' };
            } else {
                throw createError({
                    statusCode: 401,
                    statusMessage: 'Unauthorized',
                    message: 'Invalid password',
                });
            }
        } else {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized',
                message: 'User not found',
            });
        }
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;

        throw createError({
            statusCode: 500,
            statusMessage: `${err.message}`,
        });
    } finally {
        conn.release();
    }
});
