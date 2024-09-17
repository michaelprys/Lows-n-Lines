import { pool } from '~~/server/utils/db';
import argon2 from 'argon2';
import { SignInSchema } from '~/utils/schemas';
import { safeParse } from 'valibot';

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

    const { email, password, rememberMe } = body;
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
                const sessionData = { id: user.id, email: user.email };

                const maxAge = rememberMe ? 60 * 60 * 24 * 30 : undefined;

                setCookie(event, 'session', JSON.stringify(sessionData), {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge,
                    path: '/',
                    sameSite: 'strict',
                });
                setResponseStatus(event, 200, 'Logged in successfully');
            } else {
                throw createError({
                    statusCode: 401,
                    statusMessage: 'Unauthorized',
                    message: "User doesn't exist",
                });
            }
        } else {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized',
                message: "User doesn't exist",
            });
        }
    } catch (err) {
        throw createError({
            statusCode: 500,
            statusMessage: `${err.message}`,
        });
    } finally {
        conn.release();
    }
});
