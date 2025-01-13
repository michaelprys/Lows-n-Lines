import { pool } from '~~/server/utils/db';
import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export default defineEventHandler(async event => {
    const conn = await pool.connect();

    const selectedType = event.query.type as string;

    if (!selectedType) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing type parameter',
            message: 'The type parameter is required.',
        });
    }
    try {
        const res = await conn.query(
            'SELECT vehicle.id FROM vehicle JOIN vehicle_type_relations ON vehicle.id = vehicle_type_relations.vehicle_id JOIN vehicle_type ON vehicle_type.id = vehicle_type_relations.vehicle_type_id WHERE vehicle_type.type_name = $1',
            [selectedType]
        );

        if (res.rows.length > 0) {
            return { data: res.rows };
        } else {
            throw createError({
                statusCode: 404,
                statusMessage: 'Loading failed',
                message: 'Error loading vehicle type',
            });
        }
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;
        console.error(err);
        throw createError({
            statusCode: 500,
            statusMessage: err.statusMessage || 'Server error',
            message: err.message || 'Server error',
        });
    } finally {
        conn.release();
    }
});
