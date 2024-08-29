<template>
  <section
    class="mt-36 flex flex-col items-center justify-center overflow-hidden md-max:mt-28"
  >
    <Carousel
      class="overflow-hidden"
      :opts="{
        loop: true,
      }"
    >
      <ItemObserver v-slot="{ isVisible }">
        <div
          class="flex flex-col items-center"
          :class="{ 'fade-in': isVisible }"
        >
          <div class="relative items-center gap-4">
            <CarouselPrevious class="btn absolute"></CarouselPrevious>
            <h1 class="font-[Gin-Test] text-2xl uppercase">Featured cars</h1>
            <CarouselNext class="btn absolute"></CarouselNext>
          </div>
          <NuxtLink
            to="/showroom"
            class="mt-3 uppercase text-black underline underline-offset-4 transition-colors hover:text-gray-500 dark:text-gray-300 dark:hover:text-dark-el"
            >View all</NuxtLink
          >
        </div>
      </ItemObserver>
      <ItemObserver v-slot="{ isVisible }">
        <div :class="{ 'fade-in-up': isVisible }">
          <CarouselContent
            class="mt-14 *:basis-1/5 lg-max:*:basis-1/3 sm-max:*:basis-1/2"
          >
            <CarouselItem v-for="item in 8" :key="item">
              <NuxtLink to="/showroom" class="flex justify-center">
                <NuxtImg
                  class="w-full object-cover"
                  width="411"
                  height="411"
                  src="/images/cars/car-5.jpg"
                  alt="featured car 1"
                />
              </NuxtLink>
              <NuxtLink
                to="/showroom"
                class="mt-4 flex flex-col gap-2 text-left text-sm md-max:text-xs"
              >
                <span>"ROLLIN' BEAUTY" - BUICK RIVIERA</span>
                <span>$25,000 - $45,000</span>
              </NuxtLink>
            </CarouselItem>
          </CarouselContent>
        </div>
      </ItemObserver>
    </Carousel>
  </section>
</template>

<style scoped>
.btn {
  background-color: rgb(240, 240, 240);
  border-radius: 50%;
  padding: 0.4em;
  stroke: rgb(158, 158, 158);
  cursor: pointer;
  border: 1px solid rgb(208, 208, 208);
  width: 2rem;
  height: 2rem;
  user-select: none;
}
.btn:hover {
  background-color: #e4e4e4;
}

.dark .btn {
  background-color: rgb(219, 219, 219);
}
.dark .btn:hover {
  background-color: #f2f2f2;
}
.dark .btn :deep svg {
  stroke: #000;
}
.swiper-button-disabled {
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  cursor: auto;
}
</style>
