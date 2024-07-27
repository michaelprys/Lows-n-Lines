<template>
  <section class="container mb-20 mt-16">
    <ul class="grid grid-cols-4 gap-7">
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
  </section>
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
