<template>
  <div>
    <section class="relative flex flex-col items-center">
      <div class="relative">
        <div class="absolute h-full w-full bg-black opacity-10"></div>
        <NuxtImg
          class="min-h-[41.5rem] object-cover"
          src="/images/home/intro/intro.jpg"
        />
      </div>
      <NuxtLink
        class="border-1 mt-14 rounded-[3px] border-[#DDD499] bg-[#F1E798] px-12 py-4 text-sm uppercase lg-max:px-6 lg-max:text-xs md-min:absolute md-min:bottom-36 md-min:left-20"
        to="/showroom"
      >
        Visit our showroom
      </NuxtLink>
    </section>

    <section class="container mt-28 flex justify-center md-max:mt-14">
      <div class="flex max-w-[92.5rem] flex-col items-center gap-8">
        <ul class="flex gap-8">
          <li class="relative">
            <NuxtImg
              class="h-full object-cover"
              width="806.67"
              height="460"
              src="images/home/explore/explore-1.jpg"
              alt="explore image 1"
            />
            <NuxtLink
              to="/"
              class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-zinc-200 md-max:px-2 md-max:py-1 md-max:text-xs"
            >
              About our cars
            </NuxtLink>
          </li>
          <li class="relative">
            <NuxtImg
              width="563.33"
              height="460"
              class="h-full object-cover"
              src="images/home/explore/explore-2.jpg"
              alt="explore image 2"
            />
            <NuxtLink
              to="/"
              class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-zinc-200 md-max:px-2 md-max:py-1 md-max:text-xs"
            >
              Events
            </NuxtLink>
          </li>
        </ul>
        <ul class="flex gap-8">
          <li class="relative">
            <NuxtImg
              class="h-full object-cover"
              width="806.67"
              height="460"
              src="images/home/explore/explore-3.jpg"
              alt="explore image 3 "
            />
            <NuxtLink
              to="/"
              class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-zinc-200 md-max:px-2 md-max:py-1 md-max:text-xs"
            >
              Services
            </NuxtLink>
          </li>
          <li class="relative">
            <NuxtImg
              class="h-full object-cover"
              width="563.33"
              height="460"
              src="images/home/explore/explore-4.jpg"
              alt="explore image 4"
            />
            <NuxtLink
              to="/"
              class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-zinc-200 md-max:px-2 md-max:py-1 md-max:text-xs"
            >
              Shop gear
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style></style>
