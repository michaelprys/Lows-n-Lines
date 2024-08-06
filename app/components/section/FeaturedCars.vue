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
      <div class="flex flex-col items-center">
        <div class="relative items-center gap-4">
          <CarouselPrevious class="absolute"></CarouselPrevious>
          <ItemObserver v-slot="{ isVisible }">
            <h1
              class="font-[Gin-Test] text-2xl uppercase opacity-0"
              :class="{ 'fade-in': isVisible }"
            >
              Featured cars
            </h1>
          </ItemObserver>
          <CarouselNext class="absolute"></CarouselNext>
        </div>
        <NuxtLink
          to="/"
          class="mt-3 uppercase text-[#1B1B1B] underline underline-offset-4"
          >View all</NuxtLink
        >
      </div>
      <ItemObserver v-slot="{ isVisible }">
        <div class="opacity-0" :class="{ 'fade-in-up': isVisible }">
          <CarouselContent
            class="mt-14 *:basis-1/5 lg-max:*:basis-1/3 sm-max:*:basis-1/2"
          >
            <CarouselItem v-for="item in 8" :key="item">
              <NuxtLink to="/" class="flex justify-center">
                <NuxtImg
                  class="w-full object-cover"
                  width="411"
                  height="411"
                  src="/images/home/featured-cars/car-5.jpg"
                  alt="featured car 1"
                />
              </NuxtLink>
              <NuxtLink
                to="/"
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
