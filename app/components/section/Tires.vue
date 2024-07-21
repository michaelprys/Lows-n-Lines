<template>
  <section
    class="container mt-32 flex flex-col items-center justify-center text-center"
  >
    <div class="max-w-[50rem]">
      <h1 class="font-[Gin-Test] text-2xl uppercase">Drive with us!</h1>
      <p class="mt-5">
        Get ready to hit the streets with style. Lows 'n' Lines is more than
        just a shop, we're a community. Customize your car, embrace the lowrider
        culture, and cruise with us!
      </p>
    </div>

    <div class="max-w-[87.5rem]">
      <h2 class="mt-32 font-semibold uppercase">Choose preferred tires</h2>

      <ul
        class="mt-8 grid grid-cols-4 gap-x-6 gap-y-16 *:text-xs md-max:grid-cols-2"
      >
        <li>
          <NuxtImg
            class="h-full w-full object-cover"
            src="/images/home/tires/tire-1.jpg"
            alt="tire image 1"
            width="327.5px"
            height="238.52px"
          />
          <p class="mt-3 text-left">20 inch Standard Wire Wheels Orange</p>
        </li>
        <li>
          <NuxtImg
            class="h-full w-full object-cover"
            src="/images/home/tires/tire-2.jpg"
            alt="tire image 2"
            width="327.5px"
            height="238.52px"
          />
          <p class="mt-3 text-left">20 inch Standard Wire Wheels Yellow</p>
        </li>
        <li>
          <NuxtImg
            class="h-full w-full object-cover"
            src="/images/home/tires/tire-3.jpg"
            alt="tire image 3"
            width="327.5px"
            height="238.52px"
          />
          <p class="mt-3 text-left">20 inch Standard Wire Wheels Red</p>
        </li>
        <li>
          <NuxtImg
            class="h-full w-full object-cover"
            src="/images/home/tires/tire-4.jpg"
            alt="tire image 4"
            width="327.5px"
            height="238.52px"
          />
          <p class="mt-3 text-left">20 inch Standard Wire Wheels Chrome</p>
        </li>
      </ul>
    </div>
  </section>
</template>
