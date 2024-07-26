<template>
  <footer class="bg-[#F4F6F8]">
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
      class="mt-16 grid grid-cols-4 place-items-center items-start gap-x-10 px-[3.75rem] xl-max:grid-cols-2 xl-max:place-items-start xl-max:gap-y-10 md-max:grid-cols-1"
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
            <NuxtLink class="transition-colors hover:text-zinc-500" to="/"
              >Contact Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="transition-colors hover:text-zinc-500" to="/"
              >FAQ</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="transition-colors hover:text-zinc-500" to="/"
              >Help Center</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="transition-colors hover:text-zinc-500" to="/"
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
            <NuxtLink class="transition-colors hover:text-zinc-500" to="/"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="transition-colors hover:text-zinc-500" to="/"
              >Read The Journal</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="transition-colors hover:text-zinc-500" to="/"
              >Terms & Conditions</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="transition-colors hover:text-zinc-500" to="/"
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
          class="mt-7 w-full max-w-[19.375rem] rounded-[3px] border-2 border-zinc-200 px-4 py-3 placeholder:text-[#1B1B1B]"
          w-full
          type="text"
          placeholder="Enter email"
        />
        <NuxtLink
          class="mt-6 block w-full max-w-[6.9375rem] rounded-[3px] border border-[#e5ddac] bg-[#F1E798] py-3 text-center text-sm uppercase"
          to="/"
        >
          Sign up
        </NuxtLink>
      </div>
    </div>
    <div>
      <hr class="mt-14 border-[#EEEEEE]" />
      <div
        class="mt-10 flex items-center justify-between px-[3.75rem] pb-[3.75rem] md-max:flex-col-reverse md-max:items-start md-max:gap-10"
      >
        <div class="w-full max-w-[13.125rem]">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Currency</SelectLabel>
                <SelectItem
                  class="cursor-pointer transition-colors hover:bg-zinc-100"
                  value="USD"
                >
                  USD
                </SelectItem>
                <SelectItem
                  class="cursor-pointer transition-colors hover:bg-zinc-100"
                  value="EUR"
                >
                  EUR
                </SelectItem>
                <SelectItem
                  class="cursor-pointer transition-colors hover:bg-zinc-100"
                  value="CAD"
                >
                  CAD
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <span class="mt-5 block text-xs uppercase"
            >@ 2024 Lows 'n' Lines</span
          >
        </div>

        <div
          class="xs-max:w-full xs-max:justify-between flex items-center gap-8"
        >
          <NuxtLink to="/">
            <img
              class="image"
              src="/images/icons/youtube.svg"
              loading="lazy"
              alt="youtube icon"
              width="32px"
              height="32px"
            />
          </NuxtLink>
          <NuxtLink to="/">
            <img
              class="image"
              src="/images/icons/facebook.svg"
              loading="lazy"
              alt="facebook icon"
              width="27px"
              height="27px"
            />
          </NuxtLink>
          <NuxtLink to="/">
            <img
              class="image"
              src="/images/icons/x.svg"
              loading="lazy"
              alt="x icon"
              width="27px"
              height="27px"
          /></NuxtLink>
          <NuxtLink to="/">
            <img
              class="image"
              src="/images/icons/insta.svg"
              loading="lazy"
              alt="insta icon"
              width="27px"
              height="27px"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
