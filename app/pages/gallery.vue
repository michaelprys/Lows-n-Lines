<template>
  <section class="container mb-24 mt-10">
    <h1 class="text-center font-['Gin-Test'] text-4xl text-[#808080]">
      Gallery
    </h1>
    <ul
      class="mt-10 grid grid-cols-3 justify-center gap-2.5 lg-max:grid-cols-2 md-max:grid-cols-1"
    >
      <li v-for="(item, idx) in imgs" :key="item">
        <NuxtImg
          class="w-full cursor-pointer rounded-lg object-cover"
          :src="`${item}`"
          width="562"
          height="375"
          :alt="`gallery image ${idx}`"
          @click="() => showImg(idx)"
        />
      </li>
    </ul>

    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      @hide="onHide"
    />

    <button class="mx-auto mt-10 block" type="button">
      <span class="text-xl">+</span> Show More
    </button>
  </section>
</template>

<script setup>
const visibleRef = ref(false);
const indexRef = ref(0);

const imgs = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-1.jpg",
];

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);
</script>
