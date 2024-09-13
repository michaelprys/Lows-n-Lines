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
}

export interface MessageData {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    subject?: string;
    message: string;
}

const state = reactive({
    registered: false,
    pending: false,
    messageSent: false,
    error: null as string | null,
    successMessage: null as string | null,
});

export const useStoreAuth = () => {
    const router = useRouter();
    const route = useRoute();
    const session = useCookie('session');
    const signedIn = computed(() => !!session.value);

    const registerUser = async (registerData: RegisterData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await fetch(`${apiBase}/registration`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerData),
            });

            if (res.ok) {
                state.registered = true;
                state.successMessage = 'Successfully registered';
            } else {
                const resData = await res.json();
                if (res.status === 400) {
                    state.error = 'Validation error';
                } else if (res.status === 409) {
                    state.error = 'User already exists';
                } else {
                    state.error = `Unexpected response ${res.status}: ${resData.message}`;
                }
            }
        } catch (err) {
            state.error = `An unexpected error occurred ${err.message}`;
        } finally {
            state.pending = false;
        }
    };

    const signIn = async (signInData: SignInData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        const res = await fetch(`${apiBase}/signIn`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signInData),
        });

        try {
            if (res.ok) {
                state.successMessage = 'Signed in successfully';
                setTimeout(() => {
                    navigateTo('/');
                }, 3000);
            } else if (res.status === 400) {
                state.error = 'Validation error';
            } else {
                const resData = await res.json();
                state.error = "User doesn't exist" || resData.message;
            }
        } catch (err) {
            state.error = `An unexpected error occurred ${err.message}`;
        } finally {
            state.pending = false;
        }
    };

    const signOut = async () => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;

        try {
            const res = await fetch(`${apiBase}/signOut`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                if (route.path === '/') {
                    router.go(0);
                } else {
                    navigateTo('/');
                }
                state.successMessage = 'Signed out successfully';
            } else {
                const resData = await res.json();
                state.error = resData.message || 'Sign out failed';
            }
        } catch (err) {
            state.error = `An unexpected error occurred ${err.message}`;
        } finally {
            state.pending = false;
        }
    };

    const sendMessage = async (messageData: MessageData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.pending = true;
        state.error = null;
        state.successMessage = null;

        const res = await fetch(`${apiBase}/inquiries`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageData),
        });

        try {
            if (res.ok) {
                state.messageSent = true;
                state.successMessage = 'Message sent successfully';
            } else if (res.status === 400) {
                state.error = 'Validation error';
            } else {
                const resData = await res.json();
                state.error = 'Error sending message' || resData.message;
            }
        } catch (err) {
            state.error = `An unexpected error occurred ${err.message}`;
        } finally {
            state.pending = false;
        }
    };

    return {
        ...toRefs(state),
        registerUser,
        signIn,
        sendMessage,
        signedIn,
        signOut,
    };
};
