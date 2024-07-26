<template>
  <div>
    <form class="mt-10 rounded-[2px] bg-white p-5">
      <span class="block text-2xl font-semibold">Sign in</span>
      <div class="mt-5 flex flex-col gap-5">
        <input
          class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <div class="relative">
          <input
            class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <ButtonVisibility />
        </div>
        <div class="flex items-center gap-2 *:cursor-pointer">
          <Checkbox
            class="rounded-[2px] transition duration-75"
            id="remember-me"
          />
          <label class="select-none" for="remember-me">Remember me</label>
        </div>

        <div class="flex items-center justify-between">
          <NuxtLink class="underline" to="/">Forgot password?</NuxtLink>
          <button
            class="rounded-sm border border-[#f0a5a7] bg-[#F19899] px-6 py-2"
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
    <span class="mb-10 mt-5 block text-center text-white"
      >Don't have an account?
      <NuxtLink class="text-black" to="/sign-up">Create one</NuxtLink></span
    >
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>
