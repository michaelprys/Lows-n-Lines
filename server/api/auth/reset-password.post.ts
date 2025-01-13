import { safeParse } from 'valibot';
import { ensureError } from '~/utils/ensureError';
import { ResetPasswordSchema } from '~/utils/schemas';
import argon2 from 'argon2';
import { pool } from '~~/server/utils/db';

export default defineEventHandler(async event => {
    const body = await readBody(event);

    const validation = safeParse(ResetPasswordSchema, body);

    if (!validation.success) {
        throw createError({
            statusCode: 400,
            message: 'Validation error',
        });
    }

    const { resetToken, password } = body;

    const conn = await pool.connect();

    try {
        const res = await conn.query('SELECT id FROM users WHERE reset_token = $1', [resetToken]);

        if (res.rows.length === 0) {
            throw createError({
                statusCode: 400,
                message: 'Invalid reset token',
            });
        }

        const hashedPassword = await argon2.hash(password);
        await conn.query(
            'UPDATE users SET password = $2, reset_token = NULL, reset_token_expires_at = NULL WHERE reset_token = $1',
            [resetToken, hashedPassword]
        );

        setResponseStatus(event, 200, 'Password has been changed');

        return { message: 'Password has been changed' };
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;

        throw createError({
            statusCode: 500,
            statusMessage: `Server error ${err.message}`,
        });
    } finally {
        conn.release();
    }
});
