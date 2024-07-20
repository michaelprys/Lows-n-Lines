<template>
  <section class="container mt-28 flex justify-center md-max:mt-14">
    <div
      class="flex max-w-[92.5rem] flex-col items-center gap-8 lg-max:max-w-[640px]"
    >
      <ul class="flex gap-8 lg-max:flex-col">
        <li class="relative h-[28.75rem] max-w-[50.4169rem] lg-max:max-w-full">
          <NuxtLink to="/">
            <div class="absolute h-full w-full bg-black opacity-10"></div>
            <NuxtImg
              class="h-full w-full"
              fit="cover"
              :src="`images/home/explore/explore-1.jpg`"
              :alt="`explore image 1`"
              width="806.67px"
              height="460px"
            />
            <NuxtLink
              to="/"
              class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-[#F1E798] md-max:text-xs"
              >About our cars</NuxtLink
            >
          </NuxtLink>
        </li>
        <li class="relative h-[28.75rem] max-w-[35.2081rem] lg-max:max-w-full">
          <NuxtLink to="/">
            <div class="absolute h-full w-full bg-black opacity-10"></div>
            <NuxtImg
              class="h-full w-full object-cover"
              :src="`images/home/explore/explore-2.jpg`"
              :alt="`explore image 2`"
              width="563.33px"
              height="460px"
            />
            <NuxtLink
              to="/"
              class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-[#F1E798] md-max:text-xs"
              >Events</NuxtLink
            >
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex gap-8 lg-max:flex-col">
        <li class="relative h-[28.75rem] max-w-[35.2081rem] lg-max:max-w-full">
          <NuxtLink to="/"
            ><div class="absolute h-full w-full bg-black opacity-10"></div>
            <NuxtImg
              class="h-full w-full object-cover"
              :src="`images/home/explore/explore-3.jpg`"
              :alt="`explore image 3`"
              width="806.67px"
              height="460px"
            />
            <NuxtLink
              to="/"
              class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-[#F1E798] md-max:text-xs"
              >Services</NuxtLink
            ></NuxtLink
          >
        </li>
        <li class="relative h-[28.75rem] max-w-[50.4169rem] lg-max:max-w-full">
          <NuxtLink to="/">
            <div class="absolute h-full w-full bg-black opacity-10"></div>
            <NuxtImg
              class="h-full w-full object-cover"
              :src="`images/home/explore/explore-4.jpg`"
              :alt="`explore image 4`"
              width="563.33px"
              height="460px"
            />
            <NuxtLink
              to="/"
              class="absolute bottom-5 left-5 rounded-[3px] bg-white px-3 py-2 text-sm uppercase transition-colors hover:bg-[#F1E798] md-max:text-xs"
              >Shop gear</NuxtLink
            >
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    id: "1",
    width: "50.4149rem",
    text: "About our cars",
  },
  {
    id: "2",
    width: "35.2081rem",
    text: "Events",
  },
  {
    id: "3",
    width: "50.4149rem",
    text: "Services",
  },
  {
    id: "4",
    width: "35.2081rem",
    text: "Shop gear",
  },
];
</script>
