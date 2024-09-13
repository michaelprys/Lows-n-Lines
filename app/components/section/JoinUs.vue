<template>
    <div>
        <section
            class="mt-32 flex bg-[#151515] pb-28 pt-28 md-max:pb-10 md-max:pt-16">
            <div class="container max-w-[30rem]">
                <ItemObserver v-slot="{ isVisible }">
                    <div
                        :class="isVisible ? 'fade-in-up-delayed' : 'invisible'">
                        <h2 class="text-center uppercase text-dark-el">
                            Lows 'n' lines family
                        </h2>
                        <span class="mt-7 block text-center text-dark-el"
                            >Join us</span
                        >
                        <div class="mt-5 flex items-center gap-3">
                            <input
                                class="min-h-[3.2em] w-full rounded-[3px] pl-5 placeholder-[#1B1B1B]"
                                type="text"
                                placeholder="Enter email" />
                            <NuxtLink
                                class="w-full max-w-[6.9375rem] rounded-[3px] border border-[#e5ddac] bg-[#F1E798] py-4 text-center text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
                                to="/">
                                Sign up
                            </NuxtLink>
                        </div>
                    </div>
                </ItemObserver>
            </div>
        </section>
    </div>
</template>
