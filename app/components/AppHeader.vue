<template>
    <!-- <div
        class="bg h-[10.9375rem] w-full rotate-180 invert fade-in dark:invert-0"></div> -->
    <div class="sticky top-0 z-[10] w-full">
        <ItemObserver v-slot="{ isVisible }">
            <header
                class="header header-bg relative"
                :class="[
                    { active: isHidden },
                    isVisible ? 'fade-in' : 'invisible',
                ]"
                ref="el">
                <nav
                    class="font-['Inter Medium'] relative flex min-h-[10.875rem] items-center px-14 extra-max:grid extra-max:grid-rows-3 extra-max:px-5">
                    <div class="row-start-2 hidden md-max:block">
                        <button @click="toggleDrawer" type="button">
                            <IconHamburger
                                class="stroke-black hover:stroke-gray-500 dark:stroke-white"
                                aria-label="drawer menu icon" />
                        </button>
                    </div>

                    <div
                        class="row-start-3 extra-max:justify-self-center md-max:hidden">
                        <ul
                            class="text-md flex flex-1 items-center gap-10 dark:text-dark-el">
                            <li v-for="link in linksPrimary" :key="link.name">
                                <NuxtLink
                                    class="duration-[350ms] relative py-2 transition-colors before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:bg-zinc-500 before:transition-[width] before:duration-500 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[2px] after:w-0 after:origin-center after:bg-zinc-500 after:transition-[width] after:duration-500 after:ease-in-out hover:text-zinc-500 hover:before:w-[50%] hover:after:w-[50%] dark:before:bg-zinc-300 dark:after:bg-zinc-300 dark:hover:text-zinc-300"
                                    :to="link.route"
                                    >{{ link.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <div class="row-start-2 flex flex-1 justify-end">
                        <button
                            class="mr-10 block lg-max:mr-4"
                            @click="setColorTheme()">
                            <IconDarkMode
                                class="stroke-[#33363F] dark:stroke-dark-el"
                                aria-label="dark mode icon" />
                        </button>
                        <div v-if="!signedIn">
                            <NuxtLink
                                class="flex items-center gap-2"
                                to="/sign-in">
                                <span class="lg-max:hidden">Sign In</span>
                                <IconSignIn aria-label="sign in icon" />
                            </NuxtLink>
                        </div>
                        <div
                            class="flex items-center gap-10 lg-max:gap-4"
                            v-else>
                            <NuxtLink
                                class="flex items-center gap-2"
                                to="/profile">
                                <span class="lg-max:hidden">Profile</span>
                                <IconProfile
                                    class="lg-min:hidden"
                                    aria-label="user profile icon" />
                            </NuxtLink>
                            <button
                                class="flex items-center gap-2"
                                to="/sign-in"
                                @click="handleSignOut">
                                <span class="lg-max:hidden">Sign Out</span>
                                <IconSignOut aria-label="sign out icon" />
                            </button>
                        </div>
                    </div>

                    <NuxtLink to="/">
                        <NuxtImg
                            class="md-mx absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover dark:brightness-[190%] dark:grayscale extra-max:pb-7 md-max:w-48 md-max:pb-0 sm-max:w-40 extra-min:pb-0"
                            to="/"
                            src="/images/logo.png"
                            width="240" />
                    </NuxtLink>
                </nav>
            </header>
        </ItemObserver>
    </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
defineProps(['toggleDrawer', 'linksPrimary']);

const { signedIn, signOut, pending } = useStoreAuth();
const { callToast } = useToast();

const { y } = useWindowScroll();
const el = ref(null);
const isHidden = ref(false);

const colorMode = useColorMode();

const setColorTheme = () => {
    const newTheme = colorMode.preference === 'light' ? 'dark' : 'light';
    colorMode.preference = newTheme;
};

let lastScroll = y.value;

const handleSignOut = async () => {
    await signOut();
    if (!signedIn.value && !pending.value) {
        callToast();
    }
};

onMounted(async () => {
    watch(
        () => y.value,
        (newValue, oldValue) => {
            if (oldValue <= newValue && newValue >= 174) {
                isHidden.value = true;
            } else {
                isHidden.value = false;
            }
            lastScroll = newValue;
        }
    );
});

watchEffect(() => {
    console.log('signedIn Client: ', signedIn.value);
});
</script>

<style scoped>
.header {
    background-color: rgba(255, 255, 255, 0.85);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.dark .header {
    background-color: rgba(33, 34, 36, 0.85);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.header-bg {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
}
.active {
    transform: translateY(-100%);
}
</style>
