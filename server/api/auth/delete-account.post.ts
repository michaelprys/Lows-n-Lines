import { pool } from '~~/server/utils/db';
import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export default defineEventHandler(async event => {
    const body = await readBody(event);

    const userId = body.userId;

    if (!userId) {
        throw createError({
            statusCode: 400,
            statusMessage: 'User ID is required',
        });
    }

    const conn = await pool.connect();

    try {
        const res = await conn.query('DELETE FROM users WHERE id = $1 RETURNING id', [userId]);

        if (res.rows.length > 0) {
            await clearUserSession(event);
            return { status: 'success', message: 'User account successfully deleted' };
        } else {
            throw createError({
                statusCode: 404,
                statusMessage: 'User not found',
            });
        }
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;

        throw createError({
            statusCode: 500,
            statusMessage: err.message || 'An error occurred while deleting the account',
        });
    } finally {
        conn.release();
    }
});
