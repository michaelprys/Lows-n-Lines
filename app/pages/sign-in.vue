<template>
    <div>
        <form
            class="mt-10 rounded-[2px] bg-white p-5 text-black dark:bg-[#28292c] dark:text-dark-el"
            ref="container"
            @submit.prevent="submitForm"
            novalidate>
            <div class="relative">
                <span class="block text-2xl font-semibold">Sign in</span>
                <ItemFormError />
            </div>
            <div class="mt-5 flex flex-col gap-5">
                <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                    placeholder="Email"
                    type="email"
                    id="email"
                    v-model="signInData.email" />
                <ItemInputMessage :fieldName="'email'" :issues="issues" />

                <div class="relative" id="password">
                    <div>
                        <input
                            class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                            :type="visible ? 'text' : 'password'"
                            placeholder="Password"
                            v-model="signInData.password"
                            autocomplete="on" />
                    </div>

                    <ButtonVisibility
                        @click="toggleVisibility"
                        :visible="visible" />
                </div>
                <ItemInputMessage :fieldName="'password'" :issues="issues" />

                <div class="flex items-center gap-2 *:cursor-pointer">
                    <Checkbox
                        class="rounded-[2px] transition duration-75"
                        id="remember-me"
                        v-model:checked="signInData.rememberMe" />
                    <label class="select-none" for="remember-me"
                        >Remember me</label
                    >
                </div>

                <div class="flex items-center justify-between">
                    <NuxtLink
                        class="underline transition-colors hover:text-gray-500"
                        to="/"
                        >Forgot password?</NuxtLink
                    >
                    <button
                        class="rounded-sm border border-[#f0a5a7] bg-[#F19899] px-6 py-2 transition-colors hover:border-[#f7c2c3] hover:bg-[#ffb9bb] dark:text-black">
                        Sign in
                    </button>
                </div>
            </div>
        </form>
        <span class="mb-10 mt-5 block text-center text-white"
            >Don't have an account?<NuxtLink
                class="ml-1.5 text-[#ff0000]"
                to="/sign-up"
                >Create one</NuxtLink
            ></span
        >
        <ItemModalStatus v-model:open="isOpen" :toggleModal="toggleModal" />
    </div>
</template>

<script setup lang="ts">
import { safeParse, flatten, type FlatErrors } from 'valibot';

const {
    signedIn,
    successMessage,
    error: fetchError,
    signIn,
    pending,
    isOpen,
    startRedirect,
    cancelRedirect,
} = useStoreAuth();

definePageMeta({
    layout: 'auth',
});

const signInData = reactive<SignInData>({
    email: '',
    password: '',
    rememberMe: false,
});

const router = useRouter();

const issues = ref<FlatErrors<typeof SignInSchema>['nested']>();

const toggleModal = () => {
    isOpen.value = !isOpen.value;
};

const resetForm = () => {
    signInData.email = '';
    signInData.password = '';
};

const submitForm = async () => {
    if (pending.value) return;

    fetchError.value = '';
    const result = safeParse(SignInSchema, signInData);

    if (result.success) {
        issues.value = {};
        await signIn(signInData);
        if (successMessage.value && !isOpen.value) {
            startRedirect();
            resetForm();
        }
    } else {
        issues.value = flatten<typeof SignInSchema>(result.issues).nested;
    }

    if (signedIn.value) {
        console.log('Login successful');
        return;
    }
};

const visible = ref(false);
const toggleVisibility = () => {
    visible.value = !visible.value;
};

router.afterEach(() => {
    if (signedIn.value) {
        setTimeout(() => {
            successMessage.value = '';
        }, 1500);
    }
    if (fetchError.value) {
        fetchError.value = '';
    }
});
onUnmounted(() => {
    cancelRedirect();
});
</script>
