<template>
  <div class="login relative flex items-center justify-center">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <NuxtImg
          class="mx-auto object-cover"
          src="/images/login/logo.png"
          width="292"
          height="76"
          alt="logo"
        />
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
              <img
                class="absolute right-6 top-1/2 -translate-y-1/2"
                src="/images/icons/hide.svg"
                width="20px"
                height="20px"
                alt="hide password icon"
              />
            </div>
            <div class="flex items-center gap-2">
              <input
                class="rounded-[2px] border border-[#BDBDBD] px-4 py-2"
                type="checkbox"
                name="checkbox"
                id="remember-me"
                placeholder="Remember me"
              />
              <label class="" for="remember-me">Remember me</label>
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
          <NuxtLink to="/">| Privacy policy</NuxtLink>
          <NuxtLink to="/">| Terms of service</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.login {
  background-image: url("/images/login/bg.jpg");
  width: 100%;
  min-height: 100vh;
  /* filter: blur(20px); */
  background-size: cover;
}
</style>
