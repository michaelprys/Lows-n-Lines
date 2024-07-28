<template>
  <div class="relative">
    <div
      class="absolute -z-10 h-full w-full bg-cover bg-center"
      style="background-image: url(&quot;/images/gallery/bg.jpg&quot;)"
    ></div>

    <section class="container pb-24 pt-14">
      <h1 class="text-center font-['Gin-Test'] text-5xl text-[#D4D4D4]">
        Gallery
      </h1>
      <ul
        class="car-list mt-14 grid grid-cols-3 justify-center gap-3 bg-[#000000ca] lg-max:grid-cols-2 md-max:grid-cols-1"
      >
        <li v-for="(item, idx) in imgs" :key="item">
          <NuxtImg
            class="w-full cursor-pointer rounded-lg object-cover shadow"
            :src="`${item}`"
            width="562"
            height="375"
            :alt="`gallery image ${idx}`"
            @click="() => showImg(idx)"
          />
        </li>
      </ul>

      <VueEasyLightbox
        class="lightbox"
        :visible="visibleRef"
        :moveDisabled="true"
        :imgs="imgs"
        :index="indexRef"
        @hide="onHide"
      />

      <button class="mx-auto mt-10 block text-lg text-white" type="button">
        <span class="text-[22px]">+</span> Show More
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
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 1);
}
</style>
