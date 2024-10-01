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
    signedIn: boolean;
};

const state = reactive({
    registered: false,
    pending: false,
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
        const { loggedIn, fetch } = useUserSession();
        const { callToast } = useToast();

        try {
            const res = await $fetch<ResponseData>(`${apiBase}/auth/sign-in`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: signInData,
            });
            await fetch();
            if (loggedIn.value) {
                state.successMessage = res.message ?? 'Signed in successfully';
                callToast();
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
                callToast();
            }
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
        sendMessage,
        signOut,
    };
};
