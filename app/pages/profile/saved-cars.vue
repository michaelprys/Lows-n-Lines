<template>
  <div>
    <section class="container mb-20 pt-12">
      <ItemObserver v-slot="{ isVisible }">
        <h1
          class="text-left font-['Gin-Test'] text-3xl text-[#89737d] opacity-0"
          :class="{ 'fade-in': isVisible }"
        >
          Favorite cars
        </h1>
      </ItemObserver>

      <ItemObserver v-slot="{ isVisible }">
        <ul
          class="mt-12 grid grid-cols-4 place-items-center gap-7 opacity-0 lg-max:grid-cols-3 md-max:grid-cols-2 sm-max:grid-cols-1"
          :class="{ 'fade-in': isVisible }"
        >
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
      </ItemObserver>

      <ItemObserver v-slot="{ isVisible }">
        <button
          class="mx-auto mt-10 block text-lg opacity-0"
          :class="{ 'fade-in': isVisible }"
          type="button"
        >
          <span class="text-xl">+</span> Show More
        </button>
      </ItemObserver>
    </section>
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
