<template>
    <div>
        <section class="container pb-36 pt-16 lg-max:pb-20">
            <div
                class="flex justify-between gap-24 lg-max:flex-col lg-max:gap-10">
                <ItemObserver class="w-full" v-slot="{ isVisible }">
                    <div :class="isVisible ? 'fade-in' : 'invisible'">
                        <h1 class="text-2xl">My account</h1>
                        <form>
                            <ul
                                class="mt-3 *:border-t *:border-[#E0E0E0] *:dark:border-dark-border">
                                <li class="py-1">
                                    <div
                                        class="flex w-full justify-between gap-7 pl-3">
                                        <label
                                            class="w-full max-w-[6.6875rem]"
                                            for="first-name"
                                            >First name</label
                                        >
                                        <div
                                            class="flex w-full max-w-[37.9375rem]">
                                            <input
                                                class="w-full max-w-[33.1875rem] px-3 py-1 placeholder-[#666666] dark:bg-[#333536]"
                                                type="text"
                                                id="first-name"
                                                placeholder="First name" />
                                            <button
                                                class="ml-5 mr-2 text-[#666666]"
                                                type="button">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-1">
                                    <div
                                        class="flex w-full justify-between gap-7 pl-3">
                                        <label
                                            class="w-full max-w-[6.6875rem]"
                                            for="last-name"
                                            >Last name</label
                                        >
                                        <div
                                            class="flex w-full max-w-[37.9375rem]">
                                            <input
                                                class="w-full max-w-[33.1875rem] px-3 py-1 placeholder-[#666666] dark:bg-[#333536]"
                                                type="text"
                                                id="last-name"
                                                placeholder="Last name" />
                                            <button
                                                class="ml-5 mr-2 text-[#666666]"
                                                type="button">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-1">
                                    <div
                                        class="flex w-full justify-between gap-7 pl-3">
                                        <label
                                            class="w-full max-w-[6.6875rem]"
                                            for="email"
                                            >Email</label
                                        >
                                        <div
                                            class="flex w-full max-w-[37.9375rem]">
                                            <input
                                                class="w-full max-w-[33.1875rem] px-3 py-1 placeholder-[#666666] dark:bg-[#333536]"
                                                type="email"
                                                id="email"
                                                autocomplete="email"
                                                placeholder="Email" />
                                            <button
                                                class="ml-5 mr-2 text-[#666666]"
                                                type="button">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-1">
                                    <div
                                        class="flex justify-between gap-7 pl-3">
                                        <label
                                            class="w-full max-w-[6.6875rem]"
                                            for="email"
                                            >Password</label
                                        >
                                        <div
                                            class="flex w-full max-w-[37.9375rem]">
                                            <input
                                                class="w-full max-w-[33.1875rem] px-3 py-1 placeholder-[#666666] dark:bg-[#333536]"
                                                type="password"
                                                id="password"
                                                autocomplete="current-password"
                                                placeholder="******" />
                                            <button
                                                class="ml-5 mr-2 text-[#666666]"
                                                type="button">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="border-b border-[#E0E0E0] py-1">
                                    <div
                                        class="flex justify-between gap-7 pl-3">
                                        <label
                                            class="w-full max-w-[6.6875rem]"
                                            for="email"
                                            >Member since</label
                                        >
                                        <div
                                            class="flex w-full max-w-[37.9375rem]">
                                            <input
                                                class="w-full max-w-[33.1875rem] px-3 py-1 placeholder-[#666666] dark:bg-[#333536]"
                                                type="text"
                                                id="member-since"
                                                placeholder="November 22, 2024" />
                                            <div
                                                class="w-full max-w-[3.5706rem]"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <NuxtLink
                                class="ml-auto mt-9 block max-w-32 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] py-3 text-center text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
                                to="/">
                                Update
                            </NuxtLink>
                        </form>
                    </div>
                </ItemObserver>

                <ItemObserver
                    class="w-full max-w-[26.25rem] lg-max:max-w-full"
                    v-slot="{ isVisible }">
                    <div :class="isVisible ? 'fade-in' : 'invisible'">
                        <div>
                            <h2 class="text-xl">Account settings</h2>
                            <p class="mt-4">
                                Lows 'n' Lines relies on the details here to
                                provide access to our services, manage requests,
                                and resolve technical issues. Incorrect
                                information might limit your ability to engage
                                in certain activities.
                            </p>
                        </div>
                        <div class="mt-4">
                            <h2 class="text-xl">Tips</h2>
                            <p class="mt-4">
                                If you have issues with any uneditable
                                information, please contact us at
                                support@lowsnlines.com.
                            </p>
                        </div>
                    </div>
                </ItemObserver>
            </div>
        </section>
    </div>
</template>
