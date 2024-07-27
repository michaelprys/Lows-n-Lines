<template>
  <div class="flex">
    <nav class="container w-full max-w-[17.5625rem] bg-[#E0E0E0]">
      <div class="mt-14 items-center justify-center">
        <div>
          <NuxtImg
            class="mx-auto rounded-full object-cover"
            src="/images/profile/avatar.jpg"
            width="134"
            height="134"
            alt="avatar image"
          />
          <span class="mt-4 block text-center uppercase">Lance Wilson</span>
        </div>

        <ul class="mt-8 *:flex *:items-center *:gap-x-1">
          <li>
            <img src="/icons/user.svg" alt="user icon" />
            <NuxtLink to="/">Settings</NuxtLink>
          </li>
          <li class="mt-3.5">
            <img src="/icons/favorite.svg" alt="favorite icon" />
            <NuxtLink to="/">Saved cars</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <NuxtImg
        class="min-h-[12.25rem] object-cover"
        src="/images/profile/head.jpg"
        width="1639"
        height="196"
        alt="profile head image"
      />

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
