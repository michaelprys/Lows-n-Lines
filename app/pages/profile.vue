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
      <!-- <section class="container mb-20 mt-16">
        <ul class=" grid grid-cols-4 gap-7">
          <li class="flex flex-col" v-for="(car, idx) in cars" :key="car">
            <NuxtImg
              class="rounded-sm object-cover"
              :src="`/images/car-details/${car}.jpg`"
              width="340"
              height="277"
              :alt="`car ${idx} image`"
            />
            <span class="mt-2">1964 Chevrolet Impala SS</span>
            <span>Price: $45,000</span>
          </li>
        </ul>
        <button class="mx-auto mt-10 block" type="button">
          <span class="text-xl">+</span> Show More
        </button>
      </section> -->

      <section class="container mb-44 mt-16">
        <div class="flex justify-between gap-24">
          <div class="w-full">
            <h1 class="text-2xl">My account</h1>
            <ul class="mt-2 *:border-t *:border-[#E0E0E0]">
              <li class="my-1">
                <div class="flex py-2 pl-3">
                  <label class="w-full max-w-[201px]" for="first-name"
                    >First name</label
                  >
                  <div class="flex w-full max-w-[41.4375rem] justify-between">
                    <input
                      class="placeholder-[#666666]"
                      type="text"
                      id="first-name"
                      placeholder="First name"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
              <li class="my-1">
                <div class="flex py-2 pl-3">
                  <label class="w-full max-w-[201px]" for="last-name"
                    >Last name</label
                  >
                  <div class="flex w-full max-w-[41.4375rem] justify-between">
                    <input
                      class="placeholder-[#666666]"
                      type="text"
                      id="last-name"
                      placeholder="Last name"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
              <li class="my-1">
                <div class="flex py-2 pl-3">
                  <label class="w-full max-w-[201px]" for="email">Email</label>
                  <div class="flex w-full max-w-[41.4375rem] justify-between">
                    <input
                      class="placeholder-[#666666]"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
              <li class="my-1">
                <div class="flex py-2 pl-3">
                  <label class="w-full max-w-[201px]" for="email"
                    >Password</label
                  >
                  <div class="flex w-full max-w-[41.4375rem] justify-between">
                    <input
                      class="placeholder-[#666666]"
                      type="password"
                      id="password"
                      placeholder="******"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
              <li class="my-1 border-b border-[#E0E0E0]">
                <div class="flex py-2 pl-3">
                  <label class="w-full max-w-[201px]" for="email"
                    >Member since</label
                  >
                  <div class="flex w-full max-w-[41.4375rem] justify-between">
                    <input
                      class="placeholder-[#666666]"
                      type="text"
                      id="member-since"
                      placeholder="November 22, 2024"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
            </ul>
            <NuxtLink
              class="ml-auto mt-9 block max-w-32 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] py-3 text-center text-sm uppercase"
              to="/"
            >
              Update
            </NuxtLink>
          </div>
          <div class="w-full max-w-[26.25rem]">
            <div>
              <h2 class="text-xl">Account settings</h2>
              <p class="mt-4">
                Lows 'n' Lines uses the information on this page to provide you
                with access to our services, process requests, and respond to
                technical issues. Incorrect information may limit your ability
                to participate in some activities.
              </p>
            </div>
            <div class="mt-4">
              <h2 class="text-xl">Tips</h2>
              <p class="mt-4">
                If you have an issue with any uneditable information on the
                left, please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const cars = [
  "car-1",
  "car-2",
  "car-3",
  "car-4",
  "car-5",
  "car-6",
  "car-7",
  "car-8",
];
</script>
