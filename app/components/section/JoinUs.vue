<template>
  <section
    class="mt-44 flex min-h-[35.0625rem] flex-col justify-center bg-[#151515]"
  >
    <div class="container mt-[7.3125rem] max-w-[25.9375rem]">
      <h2 class="text-center uppercase text-white">Lows 'n' lines family</h2>
      <span class="mt-7 block text-center text-white">Join us</span>
      <div class="mt-4 flex items-center gap-3">
        <input
          class="min-h-[3.2em] rounded-[3px] pl-5 placeholder-[#1B1B1B]"
          type="text"
          placeholder="Enter email"
        />
        <NuxtLink
          class="border-1 w-full max-w-[6.9375rem] rounded-[3px] border-[#DDD499] bg-[#F1E798] py-4 text-center text-sm uppercase"
          to="/"
        >
          Sign up
        </NuxtLink>
      </div>
    </div>

    <div class="container mt-36">
      <ul class="flex max-w-[87.5rem]">
        <li v-for="item in 4" :key="item">
          <NuxtImg
            class="object-cover mix-blend-screen"
            :src="`/images/home/partners/partner-${item}.png`"
            :alt="`partner image ${item}`"
            width="358px"
            height="118px"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
