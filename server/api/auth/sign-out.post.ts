export default defineEventHandler(async event => {
    await clearUserSession(event);
    await sendRedirect(event, '/', 302);
    return { message: 'Signed out successfully' };
});
