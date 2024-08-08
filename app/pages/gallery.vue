<template>
  <div class="relative">
    <div
      class="absolute -z-10 h-full w-full bg-cover bg-center"
      style="background-image: url(&quot;/images/gallery/bg.jpg&quot;)"
    ></div>

    <section class="container pb-24 pt-11">
      <ItemObserver v-slot="{ isVisible }">
        <h1
          class="text-center font-['Gin-Test'] text-4xl text-[#ffffff] opacity-0 drop-shadow-xl md-max:text-3xl"
          :class="{ 'fade-in': isVisible }"
        >
          Gallery
        </h1>
      </ItemObserver>
      <ul
        class="mx-auto mt-11 columns-3 gap-3 space-y-3 md-max:columns-2 xs-max:columns-1"
      >
        <li class="break-inside-avoid" v-for="(item, idx) in imgs" :key="item">
          <ItemObserver v-slot="{ isVisible }">
            <NuxtImg
              class="w-full cursor-pointer rounded-lg object-cover opacity-0 shadow-2xl"
              :class="{ 'fade-in': isVisible }"
              :src="item.url"
              :alt="`gallery image ${idx}`"
              @click="() => showImg(idx)"
            />
          </ItemObserver>
        </li>
      </ul>
      <VueEasyLightbox
        class="lightbox"
        :visible="visibleRef"
        :imgs="imgUrls"
        :index="indexRef"
        moveDisabled="true"
        @hide="onHide"
      />
      <ItemObserver v-slot="{ isVisible }">
        <button
          class="mx-auto mt-10 block text-lg text-[#f2f2f2] opacity-0 transition-colors hover:text-white"
          type="button"
          :class="{ 'fade-in': isVisible }"
        >
          <span class="text-[22px]">+</span>
          Show More
        </button>
      </ItemObserver>
    </section>
  </div>
</template>

<script setup>
const visibleRef = ref(false);
const indexRef = ref(0);

const imgs = [
  {
    url: "/images/gallery/gallery-1.jpg",
    width: "563",
    height: "375",
  },
  {
    url: "/images/gallery/gallery-2.jpg",
    width: "1920",
    height: "2880",
  },
  {
    url: "/images/gallery/gallery-3.jpg",
    width: "1920",
    height: "1280",
  },
  {
    url: "/images/gallery/gallery-4.jpg",
    width: "1920",
    height: "1280",
  },
  {
    url: "/images/gallery/gallery-5.jpg",
    width: "1920",
    height: "1440",
  },
  {
    url: "/images/gallery/gallery-6.jpg",
    width: "1920",
    height: "2880",
  },
];

const imgUrls = imgs.map((img) => img.url);

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
  cursor: auto;
}

.vel-modal {
  background-color: rgb(0, 0, 0, 0.8);
}
</style>
