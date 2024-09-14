export default defineEventHandler(async event => {
    const sessionCookie = getCookie(event, 'session');
    if (sessionCookie) {
        return { signedIn: true };
    }
    return { signedIn: false };
});
