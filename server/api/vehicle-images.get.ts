import { pool } from '~~/server/utils/db';
import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export default defineEventHandler(async event => {
    const conn = await pool.connect();
    const slug = getQuery(event).slug;

    try {
        const res = await conn.query(
            'SELECT * from vehicle_images WHERE slug = $1 ORDER BY id ASC',
            [slug]
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
        console.error('Error while fetching vehicle images:', e);
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
