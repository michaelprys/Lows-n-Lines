<template>
  <div>
    <div class="embla">
      <div class="embla__viewport" ref="mainRef">
        <div class="embla__container">
          <div class="embla__slide" v-for="(item, idx) in images" :key="item">
            <NuxtImg
              class="embla__image"
              :src="`/images/car-details/${item}.jpg`"
              :alt="`car ${idx} image`"
            />
          </div>
        </div>

        <button
          class="embla__btn-left"
          type="button"
          @click="mainApi.scrollPrev"
        >
          <IconArrow class="rotate-180" />
        </button>
        <button
          class="embla__btn-right"
          type="button"
          @click="mainApi.scrollNext"
        >
          <IconArrow />
        </button>
      </div>

      <div class="embla-thumbs">
        <div class="embla-thumbs__viewport" ref="thumbRef">
          <div class="embla-thumbs__container">
            <div
              class="embla-thumbs__slide"
              v-for="(item, idx) in images"
              :key="item"
            >
              <button class="embla-thumbs__button" @click="scrollTo(idx)">
                <NuxtImg
                  :class="[
                    'embla-thumbs__image',
                    { 'embla-thumbs__image--active': idx === selectedIdx },
                  ]"
                  :src="`/images/car-details/${item}.jpg`"
                  :alt="`car ${idx} thumbnail`"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";

const images = [
  "car-1",
  "car-2",
  "car-3",
  "car-4",
  "car-5",
  "car-6",
  "car-7",
  "car-8",
];

const selectedIdx = ref(0);
const [mainRef, mainApi] = emblaCarouselVue({ loop: true });
const [thumbRef, thumbApi] = emblaCarouselVue({ containScroll: "keepSnaps" });

const scrollTo = (idx) => {
  mainApi?.value.scrollTo(idx);
  selectedIdx.value = idx;
  thumbApi?.value.scrollTo(selectedIdx.value);
};
const onSelect = () => {
  const index = mainApi.value.selectedScrollSnap();
  selectedIdx.value = index;
  thumbApi.value.scrollTo(index);
};
onMounted(() => {
  if (mainApi.value && thumbApi.value) {
    mainApi.value.on("select", onSelect);
  }
  onSelect();
});
</script>

<style>
.embla {
  max-width: 64rem;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  margin-top: 2rem;
}
.embla__viewport {
  overflow: hidden;
  position: relative;
}
.embla__container {
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  cursor: pointer;
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
}
.embla__image {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 0.5rem;
  width: 100%;
}
.embla__btn-left,
.embla__btn-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
}
.embla__btn-left {
  left: 10px;
}
.embla__btn-right {
  right: 10px;
}

/* thumbs */
.embla-thumbs {
  --thumbs-slide-spacing: 0.8rem;
  --thumbs-slide-height: 6rem;
  margin-top: var(--thumbs-slide-spacing);
}
.embla-thumbs__viewport {
  overflow: hidden;
}
.embla-thumbs__container {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--thumbs-slide-spacing) * -1);
}
.embla-thumbs__slide {
  flex: 0 0 22%;
  min-width: 0;
  padding-left: var(--thumbs-slide-spacing);
}
.embla-thumbs__slide--active {
  filter: grayscale(0);
  filter: brightness(1);
}
@media (min-width: 576px) {
  .embla-thumbs__slide {
    flex: 0 0 15%;
  }
}
.embla-thumbs__image {
  border: 2px solid transparent;
  border-radius: 0.5rem;
  filter: grayscale(0.4);
  filter: brightness(0.5);
}
.embla-thumbs__image--active {
  border-radius: 0.5rem;
  filter: grayscale(0);
  filter: brightness(1);
  border-color: rgba(0, 0, 0, 0.531);
}
.embla-thumbs__button {
  border-radius: 1.8rem;
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--detail-high-contrast);
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--thumbs-slide-height);
  width: 100%;
}
</style>
