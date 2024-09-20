<template>
    <form class="mt-24 xl-max:mt-16" @submit.prevent="onSubmit" novalidate>
        <ItemObserver v-slot="{ isVisible }">
            <div :class="isVisible ? 'fade-in' : 'invisible'">
                <h2 class="text-center font-['Gin-Test'] text-3xl">
                    Contact us
                </h2>
                <ul
                    class="mt-7 grid grid-cols-2 gap-x-7 gap-y-5 *:flex *:flex-col">
                    <li>
                        <label class="font-semibold" for="firstname"
                            >First Name</label
                        >
                        <input
                            class="my-1.5 w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                            type="text"
                            id="firstname"
                            placeholder="First Name"
                            v-model="messageData.firstname" />
                        <ItemInputMessage
                            :fieldName="'firstname'"
                            :issues="issues" />
                    </li>
                    <li>
                        <label class="font-semibold" for="lastname"
                            >Last Name</label
                        >
                        <input
                            class="my-1.5 w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                            type="text"
                            id="lastname"
                            placeholder="Last Name"
                            v-model="messageData.lastname" />
                        <ItemInputMessage
                            :fieldName="'lastname'"
                            :issues="issues" />
                    </li>
                    <li>
                        <label class="font-semibold" for="phoneNumber"
                            >Phone Number</label
                        >
                        <input
                            class="my-1.5 w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                            type="tel"
                            id="phoneNumber"
                            placeholder="Phone Number"
                            v-model="messageData.phoneNumber" />
                        <ItemInputMessage
                            :fieldName="'phoneNumber'"
                            :issues="issues" />
                    </li>
                    <li>
                        <label class="font-semibold" for="email"
                            >Email Address</label
                        >
                        <input
                            class="my-1.5 w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                            type="text"
                            id="email"
                            placeholder="Email Address"
                            v-model="messageData.email" />
                        <ItemInputMessage
                            :fieldName="'email'"
                            :issues="issues" />
                    </li>
                </ul>

                <slot />

                <div class="mt-5 flex flex-col">
                    <label class="font-semibold" for="message">Message</label>
                    <textarea
                        v-model="messageData.message"
                        class="my-1.5 w-full resize-none rounded-[2px] border border-[#C2C2C2] px-4 py-4 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="I'd like to detail the issues with my vehicle or the services I'm requesting."></textarea>
                    <ItemInputMessage :fieldName="'message'" :issues="issues" />
                </div>
            </div>
        </ItemObserver>

        <ItemObserver v-slot="{ isVisible }">
            <div
                class="flex justify-center items-center"
                :class="isVisible ? 'fade-in-up' : 'invisible'">
                <button
                    class="mt-10 px-5 w-44 h-14 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] text-center text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
                    :class="{
                        'disabled:bg-zinc-300 disabled:text-zinc-500 disabled:border-zinc-400 disabled:shadow-none':
                            pending,
                    }"
                    disabled
                    @click="submitForm"
                    v-if="pending">
                    <span class="flex gap-2 items-center justify-center">
                        <span>Please wait</span>
                        <IconSpinner class="animate-spin" />
                    </span>
                </button>
                <button
                    class="mt-10 px-5 w-44 h-14 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] text-center text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
                    @click="submitForm"
                    v-else>
                    <span>Send message</span>
                </button>
            </div>
        </ItemObserver>
    </form>
</template>

<script setup lang="ts">
const { messageData, issues, submitForm } = useFormSubmission();
const { pending } = useStoreAuth();
</script>
