<template>
  <footer class="bg-[#F4F6F8] transition-colors dark:bg-dark-primary">
    <div class="bg-[#151515] py-10">
      <div class="container">
        <ul
          class="mx-auto grid grid-cols-4 place-items-center gap-y-10 md-max:max-w-96 md-max:grid-cols-2"
        >
          <li v-for="item in 4" :key="item">
            <NuxtImg
              class="object-cover mix-blend-screen"
              :src="`/images/home/partners/partner-${item}.png`"
              :alt="`partner image ${item}`"
              width="148"
              height="118"
            />
          </li>
        </ul>
      </div>
    </div>
    <div
      class="grid grid-cols-4 place-items-center items-start gap-x-10 px-[3.75rem] pt-16 xl-max:grid-cols-2 xl-max:place-items-start xl-max:gap-y-10 md-max:grid-cols-1"
    >
      <div class="max-w-[26.25rem] md-max:max-w-full">
        <h2 class="font-[Gin-Test] text-xl uppercase">
          Lows 'n' lines - Luxury lowrider shop
        </h2>
        <p class="mt-5 md-max:text-justify">
          Everywhere you look, you see the distinctive lines and low profiles of
          classic lowriders. Parked on streets, cruising through neighborhoods,
          and showcased at car shows. And then, of course, there are the custom
          builds that turn heads everywhere they go.
        </p>
        <p class="mt-5">
          It blows our minds to think where it all began. Some passionate
          enthusiast decided to turn a dream into reality, creating stunning
          lowriders that defy convention and capture imaginations. The rest is
          history.
        </p>
      </div>

      <div>
        <h2 class="max-w-[12.0625rem] font-[Gin-Test] text-xl uppercase">
          Contact & information
        </h2>
        <ul class="mt-5 flex flex-col gap-2">
          <li>
            <NuxtLink
              class="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
              to="/"
              >Contact Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
              to="/"
              >FAQ</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
              to="/"
              >Help Center</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
              to="/"
              >About Us</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <h2 class="max-w-[10.3125rem] font-[Gin-Test] text-xl uppercase">
          Legal information
        </h2>
        <ul class="mt-5 flex flex-col gap-2">
          <li>
            <NuxtLink
              class="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
              to="/"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
              to="/"
              >Read The Journal</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
              to="/"
              >Terms & Conditions</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="transition-colors hover:text-gray-500 dark:hover:text-gray-400"
              to="/"
              >Awards & Achievements</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div class="max-w-[20.25rem]">
        <h2 class="font-[Gin-Test] text-xl uppercase">Lows 'n' lines family</h2>
        <p class="mt-5">
          Sign up for exclusive car offers, original builds, events, and more.
        </p>
        <input
          class="mt-7 w-full max-w-[19.375rem] rounded-[3px] border-2 border-zinc-200 px-4 py-3 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
          w-full
          type="text"
          placeholder="Enter email"
        />
        <NuxtLink
          class="mt-6 block w-full max-w-[6.9375rem] rounded-[3px] border border-[#e5ddac] bg-[#F1E798] py-3 text-center text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
          to="/"
        >
          Sign up
        </NuxtLink>
      </div>
    </div>
    <div>
      <hr class="mt-14 border-[#EEEEEE] dark:border-dark-border" />
      <div
        class="flex items-center justify-between px-[3.75rem] py-[3.75rem] md-max:flex-col-reverse md-max:items-start md-max:gap-10"
      >
        <span class="block w-full max-w-[13.125rem] text-xs uppercase"
          >@ 2024 Lows 'n' Lines</span
        >

        <div
          class="flex items-center gap-8 xs-max:w-full xs-max:justify-between"
        >
          <NuxtLink to="/">
            <IconYoutube />
          </NuxtLink>
          <NuxtLink to="/">
            <IconFacebook />
          </NuxtLink>
          <NuxtLink to="/">
            <IconX class="fill-white" />
          </NuxtLink>
          <NuxtLink to="/">
            <IconInsta class="fill-white" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
