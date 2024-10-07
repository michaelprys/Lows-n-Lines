export const loadCache = (key: string) => {
    const nuxtApp = useNuxtApp();
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    if (!data) {
        return;
    }
    const expirationDate = new Date(data.fetchedAt).getTime();
    const maxAge = 1 * 60 * 60 * 1000;
    const isExpired = Date.now() > expirationDate + maxAge;
    if (isExpired) {
        return;
    }
    return data;
};
