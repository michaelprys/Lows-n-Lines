export const ensureError = (err: unknown): Error => {
    if (err instanceof Error) {
        return err;
    } else if (typeof err === 'string') {
        return new Error(err);
    } else {
        return new Error('Unknown error occurred');
    }
};
