<script setup lang="ts">
import { safeParse, flatten, type FlatErrors } from 'valibot';

definePageMeta({
    layout: 'auth',
});

const { sendMagicLink, pending, successMessage } = useStoreAuth();
const email = ref('');
const issues = ref<FlatErrors<typeof EmailSchema>['nested']>();

const handleSendMagicLink = async () => {
    issues.value = {};

    const res = safeParse(EmailSchema, { email: email.value });

    if (res.success) {
        await sendMagicLink(email.value);
        if (successMessage.value) {
            email.value = '';
        }
    } else {
        issues.value = flatten<typeof EmailSchema>(res.issues).nested;
    }
};
</script>

<template>
    <div>
        <form
            class="mt-10 rounded-[2px] bg-white p-5 text-black dark:bg-[#28292c] dark:text-dark-el"
            ref="container"
            @submit.prevent="handleSendMagicLink"
            novalidate>
            <div class="relative">
                <span class="block text-2xl font-semibold">Welcome back</span>
                <span class="block text-md mt-3.5">We will send you a link to reset your password.</span>
                <ItemFormError class="absolute top-4 right-0 w-48" />
            </div>
            <div class="mt-5 flex flex-col gap-5">
                <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                    placeholder="Email"
                    type="email"
                    id="email"
                    v-model="email" />
                <ItemInputMessage :fieldName="'email'" :issues="issues" />
            </div>

            <div class="flex items-center justify-center">
                <ButtonCommon :pending="pending" :styleAuth="true">Send link</ButtonCommon>
            </div>
        </form>
    </div>
</template>
