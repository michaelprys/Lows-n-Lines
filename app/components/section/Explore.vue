<template>
    <section class="container mt-28 flex justify-center md-max:mt-14">
        <div
            class="flex max-w-[92.5rem] flex-col items-center gap-8 dark:text-black lg-max:max-w-[640px]">
            <ul class="flex gap-8 lg-max:flex-col">
                <li
                    class="relative max-w-[50.4169rem] max-h-[28.75rem] w-full h-full lg-max:max-w-full sm-max:max-h-[24.75rem]">
                    <ItemObserver
                        class="h-full"
                        v-slot="{ isVisible }"
                        rootMargin="45px">
                        <NuxtLink
                            to="/"
                            :class="isVisible ? 'fade-in' : 'invisible'">
                            <NuxtImg
                                class="h-full w-full object-cover"
                                src="/images/home/explore/explore-1.jpg"
                                width="807"
                                height="460"
                                alt="explore image 1"
                                fit="cover" />

                            <div
                                to="/"
                                class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-[#F1E798] md-max:text-xs">
                                About us
                            </div>
                        </NuxtLink>
                    </ItemObserver>
                </li>
                <li
                    class="relative max-w-[35.2081rem] max-h-[28.75rem] w-full h-full lg-max:max-w-full sm-max:max-h-[24.75rem]">
                    <ItemObserver
                        class="h-full"
                        v-slot="{ isVisible }"
                        rootMargin="45px">
                        <NuxtLink
                            to="/"
                            :class="isVisible ? 'fade-in' : 'invisible'">
                            <NuxtImg
                                class="h-full w-full object-cover"
                                src="/images/home/explore/explore-2.jpg"
                                width="563"
                                height="460"
                                alt="explore image 2"
                                fit="cover" />
                            <div
                                to="/"
                                class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-[#F1E798] md-max:text-xs">
                                Events
                            </div>
                        </NuxtLink>
                    </ItemObserver>
                </li>
            </ul>

            <ul class="flex gap-8 lg-max:flex-col">
                <li
                    class="relative max-h-[28.75rem] h-full w-full max-w-[50.4375rem] lg-max:max-w-full sm-max:max-h-[24.75rem]">
                    <ItemObserver
                        class="h-full"
                        v-slot="{ isVisible }"
                        rootMargin="45px">
                        <NuxtLink
                            to="/"
                            :class="isVisible ? 'fade-in' : 'invisible'">
                            <NuxtImg
                                class="h-full w-full object-cover"
                                src="/images/home/explore/explore-3.jpg"
                                alt="explore image 3"
                                width="807"
                                height="460"
                                fit="cover" />
                            <div
                                to="/"
                                class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-[#F1E798] md-max:text-xs">
                                Services
                            </div>
                        </NuxtLink>
                    </ItemObserver>
                </li>
                <li
                    class="relative max-h-[28.75rem] h-full w-full max-w-[50.4169rem] lg-max:max-w-full sm-max:max-h-[24.75rem]">
                    <ItemObserver
                        class="h-full"
                        v-slot="{ isVisible }"
                        rootMargin="45px">
                        <NuxtLink
                            to="/"
                            :class="isVisible ? 'fade-in' : 'invisible'">
                            <NuxtImg
                                class="h-full w-full object-cover"
                                src="/images/home/explore/explore-4.jpg"
                                width="563"
                                height="460"
                                alt="explore image 4"
                                fit="cover" />
                            <div
                                to="/"
                                class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-[#F1E798] md-max:text-xs">
                                Gallery
                            </div>
                        </NuxtLink>
                    </ItemObserver>
                </li>
            </ul>
        </div>
    </section>
</template>
