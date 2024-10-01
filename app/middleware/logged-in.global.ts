export default defineNuxtRouteMiddleware(to => {
    const { loggedIn } = useUserSession();

    if (!loggedIn.value && to.path.startsWith('/profile')) {
        return navigateTo(`/sign-in?redirect=${encodeURIComponent(to.path)}`);
    }
    if (loggedIn.value && to.path === '/sign-in') {
        return navigateTo('/');
    }
});
