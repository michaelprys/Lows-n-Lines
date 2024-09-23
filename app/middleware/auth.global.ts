export default defineNuxtRouteMiddleware(async (to, _from) => {
    const { signedIn, checkSession } = useStoreAuth();

    await checkSession();

    if (!signedIn.value && to.path.startsWith('/profile')) {
        return navigateTo(`/sign-in?redirect=${encodeURIComponent(to.path)}`);
    }
    if (signedIn.value && to.path === '/sign-in') {
        return navigateTo('/');
    }
});
