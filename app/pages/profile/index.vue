<template>
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
              <label class="w-full max-w-[201px]" for="email">Password</label>
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
            Lows 'n' Lines uses the information on this page to provide you with
            access to our services, process requests, and respond to technical
            issues. Incorrect information may limit your ability to participate
            in some activities.
          </p>
        </div>
        <div class="mt-4">
          <h2 class="text-xl">Tips</h2>
          <p class="mt-4">
            If you have an issue with any uneditable information on the left,
            please contact our support team.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
