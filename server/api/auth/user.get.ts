import { pool } from '~~/server/utils/db';
import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export default defineEventHandler(async event => {
    const session = await getUserSession(event);

    if (!session || !session.user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
            message: 'User is not authenticated',
        });
    }

    const userId = session.user.id;

    const conn = await pool.connect();

    try {
        const res = await conn.query('SELECT id, firstname, lastname, email, member_since FROM users WHERE id = $1', [
            userId,
        ]);

        if (res.rows.length > 0) {
            return res.rows[0];
        } else {
            throw createError({
                statusCode: 404,
                statusMessage: 'Not found',
                message: 'User not found',
            });
        }
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;
        throw createError({
            statusCode: 500,
            statusMessage: 'Server error',
            message: err.message || 'Server error',
        });
    } finally {
        conn.release();
    }
});
