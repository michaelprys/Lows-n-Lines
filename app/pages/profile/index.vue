<script setup lang="ts">
import { safeParse, flatten } from 'valibot';
import { useToggle } from '@vueuse/core';

const { getUser, error: fetchError, pending, userData, updateUserInfo, successMessage, deleteAccount } = useStoreAuth();

export type UserErrors = {
    firstname?: string[];
    lastname?: string[];
    password?: string[];
    confirmPassword?: string[];
};

const displayedData = reactive<UserProfile>({
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
});

const isOpen = reactive({
    firstname: false,
    lastname: false,
    password: false,
});

const loadUserData = async () => {
    userData.value = await getUser();

    displayedData.firstname = userData.value.firstname ?? '';
    displayedData.lastname = userData.value.lastname ?? '';
    displayedData.email = userData.value.email ?? '';
};

const editField = (field: string) => {
    Object.keys(isOpen).forEach(key => {
        if (key !== field) {
            if (isOpen[key] && displayedData[key] !== userData.value[key]) {
                displayedData[key] = userData.value[key];
            }
            isOpen[key] = false;
        } else {
            displayedData[key] = userData.value[key];
        }
    });

    if (!isOpen[field]) {
        if (field === 'password') {
            displayedData.confirmPassword = '';
        }
        displayedData[field] = userData.value[field];
    }

    isOpen[field] = !isOpen[field];
};

const currentField = ref('');

const issues = ref<UserErrors>({});

const saveChanges = async (field: string) => {
    if (pending.value) return;

    fetchError.value = '';

    const newValue = displayedData[field];
    const oldValue = userData.value[field];

    currentField.value = field;

    let schema;

    if (field === 'firstname') {
        schema = UserFirstnameSchema;
    }
    if (field === 'lastname') {
        schema = UserLastnameSchema;
    }
    if (field === 'password' || field === 'confirmPassword') {
        schema = UserPasswordSchema;
    }

    const result = safeParse(
        schema,
        field === 'password' || field === 'confirmPassword'
            ? { password: displayedData.password, confirmPassword: displayedData.confirmPassword }
            : { [field]: newValue }
    );

    if (result.success) {
        issues.value = {};

        const changes: Record<string, string> = {};
        if (newValue === oldValue) {
            issues.value[field] = ['Field has not been modified'];
            return;
        }

        if (newValue) {
            changes[field] = newValue;
        }

        if (field === 'password' && displayedData.confirmPassword) {
            changes.confirmPassword = displayedData.confirmPassword;
        }

        changes.userId = userData.value.id;

        if (Object.keys(changes).length === 0) return;

        try {
            await updateUserInfo({ userChanges: changes });

            if (field === 'firstname') {
                userData.value.firstname = displayedData.firstname;
            }
            if (field === 'lastname') {
                userData.value.lastname = displayedData.lastname;
            }

            if (successMessage.value) {
                isOpen[field] = false;
            }
        } catch (e) {
            console.error('Error saving user data', e);
        }
    } else {
        issues.value = flatten<typeof schema>(result.issues).nested;
        if (issues.value.password) {
            currentField.value = 'password';
        } else if (issues.value.confirmPassword) {
            currentField.value = 'confirmPassword';
        }
    }
};

const handleDeleteAccount = async () => {
    const res = await deleteAccount();

    if (res.accountDeleted) {
        await navigateTo('/');
    }
};

const formattedDate = computed(() => {
    if (!userData.value?.member_since) return '';
    return new Date(userData.value?.member_since).toLocaleDateString('en-EU');
});

const [showPassword, togglePassword] = useToggle();
const [showConfirmPassword, toggleConfirmPassword] = useToggle();
onMounted(async () => {
    await loadUserData();
});
</script>

<template>
    <section class="container pb-36 pt-16 lg-max:pb-20">
        <div class="flex justify-between gap-24 lg-max:flex-col lg-max:gap-10">
            <ItemObserver class="w-full" v-slot="{ isVisible }">
                <div :class="isVisible ? 'fade-in' : 'invisible'">
                    <div class="flex items-center">
                        <h1 class="text-2xl mr-6">My account</h1>
                        <ItemInputMessage :fieldName="currentField" :issues="issues">
                            <button
                                class="text-zinc-500 transition-colors ml-3 font-bold hover:text-zinc-300"
                                @click="currentField = null">
                                ✕
                            </button>
                        </ItemInputMessage>
                    </div>

                    <form @submit.prevent novalidate>
                        <ul class="mt-3 *:py-1.5 *:flex">
                            <li class="border-t border-[#E0E0E0] dark:border-dark-border">
                                <span class="min-w-36">First name</span>

                                <input
                                    class="pl-2 w-full ml-3 bg-zinc-200 dark:bg-zinc-700 rounded-sm"
                                    type="text"
                                    v-if="isOpen.firstname"
                                    v-model="displayedData.firstname"
                                    @keyup.enter="saveChanges('firstname')" />
                                <ItemUserField :pending="pending" v-else>
                                    {{ displayedData.firstname }}
                                </ItemUserField>
                                <button
                                    class="bg-[#F1E798] text-black px-3.5 rounded-sm ml-5"
                                    type="button"
                                    v-if="isOpen.firstname"
                                    @click="saveChanges('firstname')">
                                    Save
                                </button>
                                <button
                                    class="ml-7 mr-2 text-[#666666] font-bold"
                                    type="button"
                                    @click="editField('firstname')">
                                    {{ isOpen.firstname ? '✕' : 'Edit' }}
                                </button>
                            </li>
                            <li class="border-t border-[#E0E0E0] dark:border-dark-border">
                                <span class="min-w-36">Last name</span>
                                <input
                                    class="pl-2 w-full ml-3 bg-zinc-200 dark:bg-zinc-700 rounded-sm"
                                    type="text"
                                    v-if="isOpen.lastname"
                                    v-model="displayedData.lastname"
                                    @keyup.enter="saveChanges('lastname')" />
                                <ItemUserField :pending="pending" v-else>
                                    {{ displayedData.lastname }}
                                </ItemUserField>
                                <button
                                    class="bg-[#F1E798] text-black px-3.5 rounded-sm ml-5"
                                    type="button"
                                    v-if="isOpen.lastname"
                                    @click="saveChanges('lastname')">
                                    Save
                                </button>
                                <button
                                    class="ml-7 mr-2 text-[#666666] font-bold"
                                    type="button"
                                    @click="editField('lastname')">
                                    {{ isOpen.lastname ? '✕' : 'Edit' }}
                                </button>
                            </li>
                            <li class="border-t border-[#E0E0E0] dark:border-dark-border">
                                <span class="min-w-36">New password</span>
                                <div class="relative w-full" v-if="isOpen.password">
                                    <input
                                        class="pl-2 w-full ml-3 bg-zinc-200 dark:bg-zinc-700 rounded-sm"
                                        :type="showPassword ? 'text' : 'password'"
                                        v-model="displayedData.password"
                                        @keyup.enter="saveChanges('password')" />
                                    <ButtonVisibility
                                        class="*:w-4 *:h-4"
                                        :show="showPassword"
                                        @click="togglePassword()" />
                                </div>
                                <ItemUserField :pending="pending" v-else>******</ItemUserField>
                                <button
                                    class="bg-[#F1E798] text-black px-3.5 rounded-sm ml-8"
                                    type="button"
                                    v-if="isOpen.password"
                                    @click="saveChanges('password')">
                                    Save
                                </button>
                                <button
                                    class="ml-7 mr-2 text-[#666666] font-bold"
                                    type="button"
                                    @click="editField('password')">
                                    {{ isOpen.password ? '✕' : 'Edit' }}
                                </button>
                            </li>

                            <div v-if="isOpen.password">
                                <span class="min-w-36">Confirm</span>
                                <div class="relative w-full mr-[9.125rem]">
                                    <input
                                        class="pl-2 w-full ml-3 bg-zinc-200 dark:bg-zinc-700 rounded-sm"
                                        :type="showConfirmPassword ? 'text' : 'password'"
                                        v-model="displayedData.confirmPassword" />
                                    <ButtonVisibility
                                        class="*:w-4 *:h-4"
                                        :show="showConfirmPassword"
                                        @click="toggleConfirmPassword()" />
                                </div>
                            </div>

                            <li class="border-t border-[#E0E0E0] dark:border-dark-border">
                                <span class="min-w-36">Email</span>
                                <ItemUserField :pending="pending">
                                    {{ displayedData.email }}
                                </ItemUserField>
                            </li>
                            <li class="border-t border-[#E0E0E0] dark:border-dark-border">
                                <span class="min-w-36">Member since</span>
                                <ItemUserField :pending="pending">
                                    {{ formattedDate }}
                                </ItemUserField>
                            </li>
                        </ul>
                    </form>

                    <div class="flex justify-between items-center mt-5">
                        <AlertDialog>
                            <AlertDialogTrigger as-child>
                                <button class="text-red-600">Delete account</button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your account and
                                        remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel
                                        class="transition-colors dark:hover:bg-zinc-800 border-none dark:bg-zinc-900 bg-zinc-200 hover:bg-zinc-300"
                                        >Cancel</AlertDialogCancel
                                    >
                                    <AlertDialogAction
                                        class="transition-colors dark:hover:bg-zinc-800 border-none dark:bg-zinc-900 bg-zinc-200 hover:bg-zinc-300"
                                        @click="handleDeleteAccount"
                                        >Continue</AlertDialogAction
                                    >
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </ItemObserver>

            <ItemObserver class="w-full max-w-[26.25rem] lg-max:max-w-full" v-slot="{ isVisible }">
                <div :class="isVisible ? 'fade-in' : 'invisible'">
                    <div>
                        <h2 class="text-xl">Account settings</h2>
                        <p class="mt-4">
                            Lows 'n' Lines relies on the details here to provide access to our services, manage
                            requests, and resolve technical issues. Incorrect information might limit your ability to
                            engage in certain activities.
                        </p>
                    </div>
                    <div class="mt-4">
                        <h2 class="text-xl">Tips</h2>
                        <p class="mt-4">
                            If you have issues with any uneditable information, please contact us at
                            support@lowsnlines.com.
                        </p>
                    </div>
                </div>
            </ItemObserver>
        </div>
    </section>
</template>
