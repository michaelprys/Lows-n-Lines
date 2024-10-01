import { pool } from '~~/server/utils/db';
import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export default defineEventHandler(async event => {
    const conn = await pool.connect();

    try {
        const res = await conn.query('SELECT * FROM vehicle');

        if (res.rows.length > 0) {
            setResponseStatus(event, 200, 'Vehicles loaded successfully');

            return { data: res.rows };
        } else {
            throw createError({
                statusCode: 404,
                statusMessage: 'No vehicles found',
                message: 'Error loading vehicles',
            });
        }
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;
        throw createError({
            statusCode: 500,
            statusMessage: 'Server error',
            message: err.message || 'Server error',
        });
    }
});
