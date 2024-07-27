<template>
  <div class="relative">
    <!-- <div
      class="absolute left-0 top-0 -z-10 h-full w-full bg-cover bg-center opacity-50"
      style="background-image: url(&quot;/images/gallery/bg.jpg&quot;)"
    ></div> -->
    <section class="container pb-24 pt-8">
      <!-- <h1 class="text-left font-['Gin-Test'] text-4xl text-[#ffffff40]">
        Our cars
      </h1> -->
      <ul
        class="grid grid-cols-3 justify-center gap-2.5 lg-max:grid-cols-2 md-max:grid-cols-1"
      >
        <li class="shadow" v-for="(item, idx) in imgs" :key="item">
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

      <button class="mx-auto mt-10 block text-xl" type="button">
        <span class="text-2xl">+</span> Show More
      </button>
    </section>
  </div>
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
