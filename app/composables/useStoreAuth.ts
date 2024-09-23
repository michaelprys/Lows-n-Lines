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

export interface MessageData {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    subject?: string;
    message: string;
}

export type ResponseData = {
    message: string;
};

const state = reactive({
    registered: false,
    pending: false,
    signedIn: false,
    messageSent: false,
    error: null as string | null,
    successMessage: null as string | null,
});

export const useStoreAuth = () => {
    const registerUser = async (registerData: RegisterData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/registration`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: registerData,
            });
            state.registered = true;
            state.successMessage = res.message || 'Successfully registered';
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
        } finally {
            state.pending = false;
        }
    };

    const signIn = async (signInData: SignInData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/signIn`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: signInData,
            });

            await checkSession();
            if (state.signedIn) {
                state.successMessage = res.message ?? 'Signed in successfully';
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
        } finally {
            state.pending = false;
        }
    };

    const checkSession = async () => {
        const { apiBase } = useRuntimeConfig().public;
        try {
            const res = await $fetch<{ signedIn: boolean }>(
                `${apiBase}/check-session`
            );
            state.signedIn = res.signedIn;
        } catch (e) {
            console.error('Error checking session: ', ensureError(e));
        }
    };

    const signOut = async () => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/signOut`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            state.successMessage = res.message ?? null;
            await checkSession();
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;

            if (err.statusCode) {
                state.error = err.statusMessage || 'Error signing out';
            } else {
                state.error = `An unexpected error occurred ${err.message}`;
            }
        } finally {
            state.pending = false;
        }
    };

    const sendMessage = async (messageData: MessageData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/inquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: messageData,
            });
            state.messageSent = true;
            state.successMessage = res.message || 'Message sent successfully';
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;

            if (err.statusCode === 400) {
                state.error = err.statusMessage || 'Validation error';
            } else if (err.statusCode) {
                state.error = err.statusMessage || 'Error sending message';
            } else {
                state.error = `An unexpected error occurred ${err.message}`;
            }
        } finally {
            state.pending = false;
        }
    };

    return {
        ...toRefs(state),
        registerUser,
        signIn,
        checkSession,
        sendMessage,
        signOut,
    };
};
