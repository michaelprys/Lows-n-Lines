export default defineEventHandler(async (event) => {
    const sessionCookie = getCookie(event, "session");

    if (!sessionCookie) {
        throw createError({
            statusCode: 401,
            message: "Not authenticated",
        });
    }

    const sessionData = JSON.parse(sessionCookie);

    return {
        success: true,
        user: sessionData,
    };
});
