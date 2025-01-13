import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';

export interface RegisterData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    member_since?: Date;
}

export interface SignInData {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface ResetPasswordData {
    resetToken?: string;
    password: string;
    confirmPassword: string;
}

export type ResponseData = {
    message: string;
    signedIn: boolean;
};

const state = reactive({
    registered: false,
    pending: false,
    error: null as string | null,
    successMessage: null as string | null,
});

export const useStoreAuth = () => {
    const registerUser = async (registerData: RegisterData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;
        const { callToast } = useToast();

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/registration`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: registerData,
            });
            state.registered = true;
            state.successMessage = res.message || 'Successfully registered';
            callToast(state.successMessage, state.error);
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;

            if (err.statusCode === 400) {
                state.error = err.statusMessage || 'Validation error';
            } else if (err.statusCode === 409) {
                state.error = err.statusMessage || 'User already exists';
            } else if (err.statusCode) {
                state.error = `Unexpected response ${err.statusCode}: ${err.statusMessage}`;
            } else {
                state.error = `An unexpected error occurred: ${err.message}`;
            }
            callToast(state.successMessage, state.error);
        } finally {
            state.pending = false;
        }
    };

    const signIn = async (signInData: SignInData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;
        const { loggedIn, fetch } = useUserSession();
        const { callToast } = useToast();
        const { $auth } = useNuxtApp();

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/auth/sign-in`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: signInData,
            });
            await fetch();
            if (signInData.rememberMe && loggedIn.value) {
                $auth.$storage.setCookie('authToken', res.token, { expires: 30 });
            }
            if (loggedIn.value) {
                state.successMessage = res.message ?? 'Signed in successfully';
                callToast(state.successMessage, state.error);
            } else {
                state.error = 'Error signing in';
            }
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;

            if (err.statusCode === 400) {
                state.error = err.statusMessage || 'Validation error';
            } else {
                state.error = err.statusMessage || "User doesn't exist";
            }
            callToast(state.successMessage, state.error);
        } finally {
            state.pending = false;
        }
    };

    const signOut = async () => {
        const { apiBase } = useRuntimeConfig().public;
        const { loggedIn, clear } = useUserSession();
        const { callToast } = useToast();

        state.pending = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/auth/sign-out`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            await clear();
            if (!loggedIn.value) {
                state.successMessage = res.message ?? 'Signed out successfully';
                callToast(state.successMessage, state.error);
            }
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;

            if (err.statusCode) {
                state.error = err.statusMessage || 'Error signing out';
            } else {
                state.error = `An unexpected error occurred ${err.message}`;
            }
            callToast(state.successMessage, state.error);
        } finally {
            state.pending = false;
        }
    };

    const sendMagicLink = async (email: string) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;
        const { callToast } = useToast();

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/auth/send-magic-link`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: { email },
            });
            state.successMessage = res.message ?? 'Link sent to your email';
            callToast(state.successMessage, state.error);
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;
            state.error = err.statusMessage;
            callToast(state.successMessage, state.error);
        } finally {
            state.pending = false;
        }
    };

    const resetPassword = async ({ resetToken, password, confirmPassword }: ResetPasswordData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;
        const { callToast } = useToast();

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: { resetToken, password, confirmPassword },
            });
            state.successMessage = res.message ?? 'Password has been changed';
            callToast(state.successMessage, state.error);
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;
            state.error = err.statusMessage;
            callToast(state.successMessage, state.error);
        } finally {
            state.pending = false;
        }
    };

    return {
        ...toRefs(state),
        registerUser,
        signIn,
        signOut,
        sendMagicLink,
        resetPassword,
    };
};
