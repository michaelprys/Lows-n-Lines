<template>
  <div>
    <form
      class="my-10 rounded-[2px] bg-white p-5 dark:bg-dark-primary dark:text-dark-el"
    >
      <span class="block text-2xl font-semibold">Sign up</span>
      <div class="mt-5 flex flex-col gap-5">
        <input
          class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
        />
        <input
          class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
        />
        <div class="relative">
          <input
            class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <ButtonVisibility />
        </div>
        <div class="relative">
          <input
            class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
          <ButtonVisibility />
        </div>

        <div class="flex items-center justify-end">
          <button
            class="rounded-sm border border-[#f0a5a7] bg-[#F19899] px-6 py-2 transition-colors hover:border-[#f7c2c3] hover:bg-[#ffb9bb] dark:text-black"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>
