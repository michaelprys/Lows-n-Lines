<template>
  <div class="relative">
    <div
      class="absolute -z-10 h-full w-full bg-cover bg-center opacity-80"
      style="background-image: url(&quot;/images/gallery/bg.jpg&quot;)"
    ></div>

    <ItemModal :indexRef="indexRef" />

    <section class="container pb-24 pt-11">
      <h1 class="text-center font-['Gin-Test'] text-4xl text-[#D4D4D4]">
        Gallery
      </h1>
      <ul class="car-list mx-auto mt-11 columns-3 gap-3 space-y-3">
        <li class="break-inside-avoid" v-for="(item, idx) in imgs" :key="item">
          <NuxtImg
            class="w-full cursor-pointer rounded-lg object-cover shadow-lg"
            :src="`${item}`"
            :alt="`gallery image ${idx}`"
            @click="showModal(idx)"
          />
        </li>
      </ul>

      <button class="mx-auto mt-10 block text-lg text-white" type="button">
        <span class="text-[22px]">+</span> Show More
      </button>
    </section>
  </div>
</template>

<script setup>
const indexRef = ref(0);

const imgs = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.jpg",
  "/images/gallery/gallery-9.jpg",
  "/images/gallery/gallery-10.jpg",
  "/images/gallery/gallery-11.jpg",
  "/images/gallery/gallery-12.jpg",
];
</script>

<style scoped>
.lightbox :deep(img) {
  width: 62.5rem;
  height: 41.6875rem;
  object-fit: cover;
}

.vel-modal {
  background-color: rgb(0, 0, 0, 0.8);
}

.car-list {
  /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.5); */
}
</style>
