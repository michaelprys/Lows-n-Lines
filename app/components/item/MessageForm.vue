<template>
    <form class="mt-24 xl-max:mt-16" @submit.prevent="onSubmit" novalidate>
        <ItemObserver v-slot="{ isVisible }">
            <div :class="isVisible ? 'fade-in' : 'invisible'">
                <h2 class="text-center font-['Gin-Test'] text-3xl">
                    Contact us
                </h2>
                <ul
                    class="mt-7 grid grid-cols-2 gap-x-7 gap-y-5 *:flex *:flex-col"
                >
                    <li>
                        <label class="font-semibold" for="firstname"
                            >First Name</label
                        >
                        <input
                            class="my-1.5 w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                            type="text"
                            id="first-name"
                            placeholder="First Name"
                            v-model="messageData.firstname"
                        />
                        <ItemInputMessage
                            :fieldName="'firstname'"
                            :issues="issues"
                        />
                    </li>
                    <li>
                        <label class="font-semibold" for="lastname"
                            >Last Name</label
                        >
                        <input
                            class="my-1.5 w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            v-model="messageData.lastname"
                        />
                        <ItemInputMessage
                            :fieldName="'lastname'"
                            :issues="issues"
                        />
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
                            v-model="messageData.phoneNumber"
                        />
                        <ItemInputMessage
                            :fieldName="'phoneNumber'"
                            :issues="issues"
                        />
                    </li>
                    <li>
                        <label class="font-semibold" for="email"
                            >Email Address</label
                        >
                        <input
                            class="my-1.5 w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                            type="text"
                            id="emailAddress"
                            placeholder="Email Address"
                            v-model="messageData.email"
                        />
                        <ItemInputMessage
                            :fieldName="'email'"
                            :issues="issues"
                        />
                    </li>
                </ul>

                <slot />

                <div class="mt-5 flex flex-col">
                    <label class="font-semibold" for="message">Message</label>
                    <textarea
                        class="my-1.5 w-full resize-none rounded-[2px] border border-[#C2C2C2] px-4 py-4 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                        name=""
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="I'd like to detail the issues with my vehicle or the services I'm requesting."
                        v-model="messageData.message"
                    >
                    </textarea>
                    <ItemInputMessage :fieldName="'message'" :issues="issues" />
                </div>
            </div>
        </ItemObserver>
        <ItemObserver v-slot="{ isVisible }">
            <button
                class="mx-auto mt-10 block max-w-48 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] px-9 py-4 text-center text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
                :class="isVisible ? 'fade-in-up' : 'invisible'"
                @click="submitForm"
            >
                Send message
            </button>
        </ItemObserver>
    </form>
</template>

<script setup lang="ts">
defineProps(["messageData", "submitForm", "issues"]);
</script>
