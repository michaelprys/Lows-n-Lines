<template>
  <form class="mt-24 xl-max:mt-16" @submit.prevent="onSubmit" novalidate>
    <ItemObserver v-slot="{ isVisible }">
      <div :class="{ 'fade-in': isVisible }">
        <h2 class="text-center font-['Gin-Test'] text-3xl">Contact us</h2>
        <ul class="mt-7 grid grid-cols-2 gap-x-7 gap-y-5 *:flex *:flex-col">
          <li>
            <label class="font-semibold" for="firstname">First Name</label>
            <FormField v-slot="{ field }" name="firstname">
              <FormItem class="pt-1.5">
                <FormControl>
                  <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    v-bind="field"
                    v-model="messageData.firstname"
                  />
                </FormControl>
                <FormMessage class="text-[#ff3434]" />
              </FormItem>
            </FormField>
          </li>
          <li>
            <label class="font-semibold" for="lastname">Last Name</label>
            <FormField v-slot="{ field }" name="lastname">
              <FormItem class="pt-1.5">
                <FormControl>
                  <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    v-bind="field"
                    v-model="messageData.lastname"
                  />
                </FormControl>
                <FormMessage class="text-[#ff3434]" />
              </FormItem>
            </FormField>
          </li>
          <li>
            <label class="font-semibold" for="phoneNumber">Phone Number</label>
            <FormField v-slot="{ field }" name="phoneNumber">
              <FormItem class="pt-1.5">
                <FormControl>
                  <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    v-bind="field"
                    v-model="messageData.phoneNumber"
                  />
                </FormControl>
                <FormMessage class="text-[#ff3434]" />
              </FormItem>
            </FormField>
          </li>
          <li>
            <label class="font-semibold" for="email">Email Address</label>
            <FormField v-slot="{ field }" name="email">
              <FormItem class="pt-1.5">
                <FormControl>
                  <input
                    class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                    type="text"
                    id="emailAddress"
                    placeholder="Email Address"
                    v-bind="field"
                    v-model="messageData.email"
                  />
                </FormControl>
                <FormMessage class="text-[#ff3434]" />
              </FormItem>
            </FormField>
          </li>
        </ul>
        <slot />
        <div class="mt-5 flex flex-col">
          <label class="font-semibold" for="message">Message</label>
          <FormField v-slot="{ field }" name="message">
            <FormItem class="pt-1.5">
              <FormControl>
                <textarea
                  class="mt-1 w-full resize-none rounded-[2px] border border-[#C2C2C2] px-4 py-4 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="I'd like to detail the issues with my vehicle or the services I'm requesting."
                  v-bind="field"
                  v-model="messageData.message"
                ></textarea>
              </FormControl>
              <FormMessage class="text-[#ff3434]" />
            </FormItem>
          </FormField>
        </div>
      </div>
    </ItemObserver>
    <ItemObserver v-slot="{ isVisible }">
      <button
        class="mx-auto mt-10 block max-w-48 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] px-9 py-4 text-center text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
        :class="{ 'fade-in-up': isVisible }"
        @click="submitForm"
      >
        Send message
      </button>
    </ItemObserver>
  </form>
</template>

<script setup lang="ts">
defineProps(["messageData", "submitForm"]);
</script>
