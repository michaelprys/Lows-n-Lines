<template>
    <div>
        <form
            class="my-10 rounded-[2px] bg-white p-5 dark:bg-[#28292c] dark:text-dark-el"
            @submit.prevent="submitForm"
            novalidate
        >
            <div class="relative">
                <span class="block text-2xl font-semibold">Sign up</span>
                <ItemFormError />
            </div>

            <div class="mt-5 flex flex-col gap-5">
                <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                    type="text"
                    id="firstname"
                    placeholder="First Name"
                    v-model="registerData.firstname"
                />
                <ItemInputMessage :fieldName="'firstname'" :issues="issues" />
                <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                    type="text"
                    id="lastname"
                    placeholder="Last Name"
                    v-model="registerData.lastname"
                />
                <ItemInputMessage :fieldName="'lastname'" :issues="issues" />

                <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                    type="email"
                    id="email"
                    placeholder="Email"
                    v-model="registerData.email"
                />
                <ItemInputMessage :fieldName="'email'" :issues="issues" />

                <div class="relative" id="password">
                    <input
                        class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                        type="password"
                        placeholder="Password"
                        autocomplete="on"
                        v-model="registerData.password"
                    />
                    <ButtonVisibility />
                </div>
                <ItemInputMessage :fieldName="'password'" :issues="issues" />

                <div class="relative" id="confirm-password">
                    <input
                        class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                        type="password"
                        placeholder="Confirm Password"
                        v-model="registerData.confirmPassword"
                        autocomplete="on"
                    />
                    <ButtonVisibility />
                </div>
                <ItemInputMessage
                    :fieldName="'confirmPassword'"
                    :issues="issues"
                />

                <div class="flex items-center justify-end">
                    <button
                        class="rounded-sm border border-[#f0a5a7] bg-[#F19899] px-6 py-2 transition-colors hover:border-[#f7c2c3] hover:bg-[#ffb9bb] dark:text-black"
                        :class="{
                            'sign-up cursor-not-allowed rounded-md border-transparent bg-gray-300 px-4 py-2 opacity-50 hover:border-transparent hover:bg-gray-300':
                                registered,
                        }"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </form>
        <ItemModalStatus v-model:open="isOpen" :toggleDrawer="toggleDrawer" />
    </div>
</template>

<script setup lang="ts">
import { safeParse, flatten, type FlatErrors } from "valibot";

const {
    registered,
    successMessage,
    error: fetchError,
    registerUser,
    pending,
} = useStoreAuth();

definePageMeta({
    layout: "auth",
});

const registerData = reactive<RegisterData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    member_since: new Date(),
});

const router = useRouter();

const issues = ref<FlatErrors<typeof RegistrationSchema>["nested"]>();
const isOpen = ref(false);

const toggleDrawer = () => {
    isOpen.value = !isOpen.value;
};

const resetForm = () => {
    registerData.firstname = "";
    registerData.lastname = "";
    registerData.email = "";
    registerData.password = "";
    registerData.confirmPassword = "";
};

const submitForm = async () => {
    if (pending.value) return;

    fetchError.value = "";
    const result = safeParse(RegistrationSchema, registerData);

    if (registered.value) {
        return;
    }

    if (result.success) {
        issues.value = {};
        await registerUser(registerData);
        if (successMessage.value && !isOpen.value) {
            isOpen.value = true;
            resetForm();
            setTimeout(() => {
                isOpen.value = false;
                navigateTo("/");
            }, 3000);
        }
    } else {
        issues.value = flatten<typeof RegistrationSchema>(result.issues).nested;
    }

    if (registered.value) {
        setTimeout(() => {
            navigateTo("/");
        }, 2000);
    }
};

router.afterEach(() => {
    if (registered.value) {
        setTimeout(() => {
            registered.value = false;
            successMessage.value = "";
        }, 1500);
    }
    if (fetchError.value) {
        fetchError.value = "";
    }
});
</script>

<style scoped>
.sign-up {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    transition-duration: 200ms;
}
</style>
