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
          class="flex flex-col items-center opacity-0"
          :class="{ 'fade-in': isVisible }"
        >
          <div class="relative items-center gap-4">
            <CarouselPrevious
              class="btn absolute transition-colors"
            ></CarouselPrevious>
            <h1 class="font-[Gin-Test] text-2xl uppercase">Featured cars</h1>
            <CarouselNext class="btn absolute transition-colors"></CarouselNext>
          </div>
          <NuxtLink
            to="/showroom"
            class="mt-3 uppercase text-black underline underline-offset-4 transition-colors hover:text-gray-500 dark:text-gray-300 dark:hover:text-dark-el"
            >View all</NuxtLink
          >
        </div>
      </ItemObserver>
      <ItemObserver v-slot="{ isVisible }">
        <div class="opacity-0" :class="{ 'fade-in-up': isVisible }">
          <CarouselContent
            class="mt-14 *:basis-1/5 lg-max:*:basis-1/3 sm-max:*:basis-1/2"
          >
            <CarouselItem v-for="item in 8" :key="item">
              <NuxtLink to="/showroom" class="flex justify-center">
                <NuxtImg
                  class="w-full object-cover"
                  width="411"
                  height="411"
                  src="/images/home/featured-cars/car-5.jpg"
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
.btn:hover {
  background-color: #e1e1e1;
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
</style>
