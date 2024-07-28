<template>
  <div
    class="relative bg-cover"
    style="background-image: url(&quot;/images/sign-in/bg.jpg&quot;)"
  >
    <div class="container grid min-h-svh place-items-center">
      <div
        class="absolute left-[25.5px] top-10 max-w-28 opacity-50 transition-opacity hover:opacity-100"
      >
        <a
          class="flex items-center gap-1 text-xl text-white"
          to="/"
          href=""
          @click.prevent="$router.back()"
        >
          <IconArrow class="h-[1.5rem] w-[1.5rem] rotate-180" />
          Back
        </a>
      </div>
      <section class="mt-28 flex w-full max-w-[500px] flex-col justify-center">
        <NuxtLink to="/">
          <NuxtImg
            class="mx-auto object-cover"
            src="/images/sign-in/logo.png"
            width="292"
            height="76"
            alt="logo"
          />
        </NuxtLink>

        <div>
          <slot />
        </div>
      </section>

      <footer
        class="my-10 mt-auto flex gap-2 text-center text-white md-max:text-xs"
      >
        <span class="text-[#999999]">@ 2024 Lows 'n' Lines</span>
        <div>
          <span class="text-[#999999]">|</span>
          <NuxtLink to="/">
            <span class="ml-2">Privacy policy</span>
          </NuxtLink>
        </div>

        <div>
          <span class="text-[#999999]">|</span>
          <NuxtLink to="/">
            <span class="ml-2">Terms & Conditions</span></NuxtLink
          >
        </div>
      </footer>
    </div>
  </div>
</template>
