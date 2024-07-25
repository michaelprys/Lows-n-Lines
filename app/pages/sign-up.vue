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
          <span class="block text-2xl font-semibold">Sign up</span>
          <div class="mt-5 flex flex-col gap-5">
            <input
              class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name"
            />
            <input
              class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2"
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
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
            <div class="relative">
              <input
                class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2"
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
              />
              <img
                class="absolute right-6 top-1/2 -translate-y-1/2"
                src="/images/icons/hide.svg"
                width="20px"
                height="20px"
                alt="hide password icon"
              />
            </div>

            <div class="flex items-center justify-end">
              <button
                class="rounded-sm border border-[#93d885] bg-[#90EC7E] px-6 py-2"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>

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
