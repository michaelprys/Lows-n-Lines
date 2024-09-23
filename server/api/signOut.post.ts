import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export default defineEventHandler(async event => {
    try {
        deleteCookie(event, 'session');
        return { signedIn: false, message: 'Signed out successfully' };
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;
        return { message: `Sign out failed: ${err}` };
    }
});
