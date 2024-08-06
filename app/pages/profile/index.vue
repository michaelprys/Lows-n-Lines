<template>
  <div>
    <section class="container mb-36 mt-16 lg-max:mb-20">
      <div class="flex justify-between gap-24 lg-max:flex-col lg-max:gap-10">
        <ItemObserver class="w-full" v-slot="{ isVisible }">
          <div class="opacity-0" :class="{ 'fade-in': isVisible }">
            <h1 class="text-2xl">My account</h1>
            <ul class="mt-3 *:border-t *:border-[#E0E0E0]">
              <li class="my-1">
                <div class="flex w-full justify-between gap-7 py-2 pl-3">
                  <label class="w-full max-w-[6.6875rem]" for="first-name"
                    >First name</label
                  >
                  <div class="flex w-full max-w-[37.9375rem]">
                    <input
                      class="w-full placeholder-[#666666]"
                      type="text"
                      id="first-name"
                      placeholder="First name"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
              <li class="my-1">
                <div class="flex w-full justify-between gap-7 py-2 pl-3">
                  <label class="w-full max-w-[6.6875rem]" for="last-name"
                    >Last name</label
                  >
                  <div class="flex w-full max-w-[37.9375rem]">
                    <input
                      class="w-full placeholder-[#666666]"
                      type="text"
                      id="last-name"
                      placeholder="Last name"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
              <li class="my-1">
                <div class="flex w-full justify-between gap-7 py-2 pl-3">
                  <label class="w-full max-w-[6.6875rem]" for="email"
                    >Email</label
                  >
                  <div class="flex w-full max-w-[37.9375rem]">
                    <input
                      class="w-full placeholder-[#666666]"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
              <li class="my-1">
                <div class="flex justify-between gap-7 py-2 pl-3">
                  <label class="w-full max-w-[6.6875rem]" for="email"
                    >Password</label
                  >
                  <div class="flex w-full max-w-[37.9375rem]">
                    <input
                      class="w-full placeholder-[#666666]"
                      type="password"
                      id="password"
                      placeholder="******"
                    />
                    <button class="text-[#666666]" type="button">Edit</button>
                  </div>
                </div>
              </li>
              <li class="my-1 border-b border-[#E0E0E0]">
                <div class="flex justify-between gap-7 py-2 pl-3">
                  <label class="w-full max-w-[6.6875rem]" for="email"
                    >Member since</label
                  >
                  <input
                    class="w-full max-w-[37.9375rem] placeholder-[#666666]"
                    type="text"
                    id="member-since"
                    placeholder="November 22, 2024"
                  />
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
        </ItemObserver>

        <ItemObserver
          class="w-full max-w-[26.25rem] lg-max:max-w-full"
          v-slot="{ isVisible }"
        >
          <div class="opacity-0" :class="{ 'fade-in': isVisible }">
            <div>
              <h2 class="text-xl">Account settings</h2>
              <p class="mt-4">
                Lows 'n' Lines relies on the details here to provide access to
                our services, manage requests, and resolve technical issues.
                Incorrect information might limit your ability to engage in
                certain activities.
              </p>
            </div>
            <div class="mt-4">
              <h2 class="text-xl">Tips</h2>
              <p class="mt-4">
                If you encounter issues with any uneditable information on the
                left, please contact our support team.
              </p>
            </div>
          </div>
        </ItemObserver>
      </div>
    </section>
  </div>
</template>
