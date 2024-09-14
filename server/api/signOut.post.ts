export default defineEventHandler(async event => {
    try {
        deleteCookie(event, 'session');
        return { signedIn: false, message: 'Signed out successfully' };
    } catch (err) {
        return { message: `Sign out failed: ${err}` };
    }
});
