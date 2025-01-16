<script setup lang="ts">
import { safeParse, flatten, type FlatErrors } from 'valibot';
import { useToggle } from '@vueuse/core';

definePageMeta({
    layout: 'auth',
});

const [showPassword, togglePassword] = useToggle();
const [showConfirmPassword, toggleConfirmPassword] = useToggle();

const { error: fetchError, successMessage, pending, resetPassword } = useStoreAuth();
const route = useRoute();
const router = useRouter();

const resetPasswordData = reactive<ResetPasswordData>({
    password: '',
    confirmPassword: '',
});

const issues = ref<FlatErrors<typeof ResetPasswordSchema>['nested']>();

const resetToken = route.query['reset-token'] as string;

const resetForm = () => {
    resetPasswordData.password = '';
    resetPasswordData.confirmPassword = '';
};

const handleResetPassword = async () => {
    if (pending.value) return;

    fetchError.value = '';
    const res = safeParse(ResetPasswordSchema, resetPasswordData);

    if (res.success) {
        issues.value = {};
        await resetPassword({
            resetToken,
            password: resetPasswordData.password,
            confirmPassword: resetPasswordData.confirmPassword,
        });
        if (successMessage.value) {
            resetForm();
            await navigateTo('/sign-in');
        }
    } else {
        issues.value = flatten<typeof ResetPasswordSchema>(res.issues).nested;
    }
};
</script>

<template>
    <div>
        <form
            class="mt-10 rounded-[2px] bg-white p-5 text-black dark:bg-[#28292c] dark:text-dark-el"
            ref="container"
            @submit.prevent="handleResetPassword"
            novalidate>
            <div class="relative">
                <span class="block text-2xl font-semibold">Welcome back</span>
                <span class="block text-md mt-3">Update your password</span>
                <ItemFormError />
            </div>
            <div class="flex flex-col gap-5 mt-5">
                <div class="relative" id="password">
                    <input
                        class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                        :type="showPassword ? 'text' : 'password'"
                        placeholder="Password"
                        autocomplete="on"
                        v-model="resetPasswordData.password" />
                    <ButtonVisibility :show="showPassword" @click="togglePassword()" />
                </div>
                <ItemInputMessage :fieldName="'password'" :issues="issues" />

                <div class="relative" id="confirm-password">
                    <input
                        class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        placeholder="Confirm Password"
                        v-model="resetPasswordData.confirmPassword"
                        autocomplete="on" />
                    <ButtonVisibility :show="showConfirmPassword" @click="toggleConfirmPassword()" />
                </div>
                <ItemInputMessage :fieldName="'confirmPassword'" :issues="issues" />
            </div>
            <div class="flex items-center justify-center">
                <ButtonCommon :pending="pending" :styleAuth="true">Reset password</ButtonCommon>
            </div>
        </form>
    </div>
</template>
