import { pool } from '~~/server/utils/db';
import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export default defineEventHandler(async event => {
    const conn = await pool.connect();
    const query = getQuery(event);
    const limit = query.limit || 3;
    const offset = query.offset || 0;

    try {
        const res = await conn.query(
            'SELECT * from gallery LIMIT $1 OFFSET $2',
            [limit, offset]
        );

        if (res.rows.length > 0) {
            setResponseStatus(event, 200, 'Images loaded successfully');

            return { data: res.rows, message: 'Images loaded successfully' };
        } else {
            throw createError({
                statusCode: 404,
                statusMessage: 'Loading failed',
                message: 'Error loading images',
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
