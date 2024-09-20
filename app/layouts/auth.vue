<template>
    <div
        class="relative"
        style="background-image: url('/images/sign-in/bg.jpg')">
        <ItemObserver v-slot="{ isVisible }">
            <div
                class="container grid min-h-svh place-items-center"
                :class="isVisible ? 'fade-in' : 'invisible'">
                <div
                    class="absolute left-[25.5px] top-10 max-w-28 opacity-50 transition-opacity hover:opacity-100">
                    <a
                        class="flex items-center gap-1 text-xl text-white"
                        to="/"
                        href=""
                        @click.prevent="$router.back()">
                        <IconArrow class="h-[1.5rem] w-[1.5rem] rotate-180" />
                        Back
                    </a>
                </div>
                <section
                    class="mt-28 flex w-full max-w-[500px] flex-col justify-center">
                    <NuxtLink to="/">
                        <NuxtImg
                            class="mx-auto object-cover"
                            src="/images/sign-in/logo.png"
                            width="292"
                            height="76"
                            alt="logo" />
                    </NuxtLink>

                    <div>
                        <slot />
                    </div>
                </section>

                <footer
                    class="highlight-link my-10 mt-auto flex gap-2 text-center text-white md-max:text-xs">
                    <span>@ 2024 Lows 'n' Lines</span>
                    <div>
                        <span>|</span>
                        <NuxtLink to="/">
                            <span class="ml-2">Privacy policy</span>
                        </NuxtLink>
                    </div>

                    <div>
                        <span>|</span>
                        <NuxtLink to="/">
                            <span class="ml-2"
                                >Terms & Conditions</span
                            ></NuxtLink
                        >
                    </div>
                </footer>
            </div>
        </ItemObserver>
    </div>
</template>

<style scoped>
.highlight-link {
    text-shadow: rgb(75, 75, 75) 1px 0 7px;
}
</style>
