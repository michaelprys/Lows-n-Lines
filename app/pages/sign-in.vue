<template>
  <div>
    <div class="sign-in relative">
      <section
        class="container flex flex-col items-center justify-center pt-40"
      >
        <!-- <NuxtLink to="/">
          <NuxtImg
            class="mx-auto object-cover"
            src="/images/sign-in/logo.png"
            width="292"
            height="76"
            alt="logo"
          />
        </NuxtLink> -->
        <form class="mt-10 w-full max-w-[500px] rounded-[2px] bg-white p-5">
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
        <span class="mt-5 block text-white"
          >Don't have an account?
          <NuxtLink class="text-[#90EC7E]" to="/sign-up"
            >Create one</NuxtLink
          ></span
        >
        <div class="absolute bottom-5 flex gap-1.5 text-white">
          <span class="text-[#999999]">@ 2024 Lows 'n' Lines</span>
          <NuxtLink to="/"
            ><span class="text-[#999999]">|&nbsp;</span>Privacy policy</NuxtLink
          >
          <NuxtLink to="/"
            ><span class="text-[#999999]">|&nbsp;</span>Terms &
            Conditions</NuxtLink
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.sign-in {
  background-image: url("/images/sign-in/bg.jpg");
  width: 100%;
  min-height: 100vh;
  background-size: cover;
}
</style>
