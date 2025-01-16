import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';
const { callToast } = useToast();

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

export interface UserData {
    firstname: string;
    lastname: string;
    email: string;
    member_since: Date;
}

export interface UserProfile {
    firstname: string;
    lastname: string;
    password: string;
    confirmPassword: string;
}

export type ResponseData = {
    message: string;
    signedIn: boolean;
};

const state = reactive({
    userData: null as UserData | null,
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

    const getUser = async () => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await $fetch<UserData>(`${apiBase}/auth/user`);
            state.userData = res;
            return res;
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;
            state.error = err.statusMessage;
        } finally {
            state.pending = false;
        }
    };

    const updateUserInfo = async userChanges => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await $fetch<UserData>(`${apiBase}/auth/save-user-changes`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: userChanges,
            });
            state.successMessage = res.message;
            callToast(state.successMessage, state.error);
            return res;
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;
            state.error = err.statusMessage;
            callToast(state.successMessage, state.error);
        } finally {
            state.pending = false;
        }
    };

    const deleteAccount = async () => {
        const { apiBase } = useRuntimeConfig().public;
        const { clear } = useUserSession();

        state.pending = true;
        state.error = null;
        state.successMessage = null;
        const userId = state.userData?.id;

        if (!userId) {
            state.error = 'User ID not found';
            callToast(state.successMessage, state.error);
            state.pending = false;
            return { accountDeleted: false };
        }

        try {
            const res = await $fetch<UserData>(`${apiBase}/auth/delete-account`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: { userId },
            });

            if (res?.status === 'success') {
                state.successMessage = res?.message || 'Account deleted successfully';
                callToast(state.successMessage, state.error);

                state.userData = null;

                await clear();

                return { accountDeleted: true };
            }
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;
            state.error = err.statusMessage;
            callToast(state.successMessage, state.error);
        } finally {
            state.pending = false;
        }

        return { accountDeleted: false };
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
            const res = await $fetch(`${apiBase}/auth/send-magic-link`, {
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
            const res = await $fetch(`${apiBase}/auth/reset-password`, {
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
        getUser,
        updateUserInfo,
        deleteAccount,
    };
};
