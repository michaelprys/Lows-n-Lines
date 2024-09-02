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
    email: string;
    phoneNumber: string;
    message: string;
}

const state = reactive({
    registered: false,
    signedIn: false,
    loading: false,
    error: null as string | null,
    successMessage: null as string | null,
});

export const useStoreAuth = () => {
    const registerUser = async (registerData: RegisterData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.loading = true;
        state.error = null;
        state.successMessage = null;

        try {
            const res = await fetch(`${apiBase}/registration`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registerData),
            });

            if (res.ok) {
                state.registered = true;
                state.successMessage = "Successfully registered";
            } else {
                const resData = await res.json();
                if (res.status === 400) {
                    state.error = "Validation error";
                } else if (res.status === 409) {
                    state.error = "User already exists";
                } else {
                    state.error = `Unexpected response ${res.status}: ${resData.message}`;
                }
            }
        } catch (err) {
            state.error = `An unexpected error occurred ${err.message}`;
        } finally {
            state.loading = false;
        }
    };

    const signIn = async (signInData: SignInData) => {
        const { apiBase } = useRuntimeConfig().public;
        state.loading = true;
        state.error = null;
        state.successMessage = null;

        const res = await fetch(`${apiBase}/signIn`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signInData),
        });

        try {
            if (res.ok) {
                state.signedIn = true;
                state.successMessage = "Signed in successfully";
            } else if (res.status === 400) {
                state.error = "Validation error";
            } else {
                const resData = await res.json();
                state.error = "User doesn't exist" || resData.message;
            }
        } catch (err) {
            state.error = `An unexpected error occurred ${err.message}`;
        } finally {
            state.loading = false;
        }
    };

    return {
        ...toRefs(state),
        registerUser,
        signIn,
    };
};
