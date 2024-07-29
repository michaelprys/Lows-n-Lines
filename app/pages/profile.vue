<template>
  <div>
    <nav>
      <div
        class="relative min-h-[12.25rem] w-full bg-cover bg-center"
        style="background-image: url(&quot;/images/profile/head.jpg&quot;)"
      >
        <div class="min-h-[230px] w-full pt-8">
          <NuxtImg
            class="mx-auto rounded-full border-2 object-cover"
            src="/images/profile/avatar.jpg"
            width="134"
            height="134"
            alt="avatar image"
          />
          <span class="mt-3 block text-center uppercase text-white"
            >Lance Wilson</span
          >
        </div>

        <div
          class="flex justify-center gap-2 pb-8 text-white *:flex *:items-center *:gap-x-1 *:bg-[#ffffff1f] *:px-5 *:py-2"
        >
          <NuxtLink
            class="transition-colors hover:bg-[#ffffff2c]"
            to="/profile"
          >
            <img src="/icons/user.svg" alt="user icon" />
            Profile
          </NuxtLink>
          <NuxtLink
            class="transition-colors hover:bg-[#ffffff37]"
            to="/profile/saved-cars"
          >
            <img src="/icons/favorite.svg" alt="favorite icon" />
            Saved cars
          </NuxtLink>
        </div>
      </div>
    </nav>

    <div>
      <NuxtPage />
    </div>
  </div>
</template>
