export default defineNuxtRouteMiddleware((to, from) => {
    const { signedIn } = useStoreAuth();

    if (!signedIn.value) {
        return navigateTo('/sign-in');
    }
});
