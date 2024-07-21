<template>
  <section class="mt-40 flex flex-col items-center justify-center">
    <Carousel
      class="mt-10"
      :opts="{
        loop: true,
      }"
    >
      <div class="flex flex-col items-center">
        <div class="relative items-center gap-4">
          <CarouselPrevious class="absolute"> </CarouselPrevious>
          <h1 class="font-[Gin-Test] text-2xl uppercase">Featured cars</h1>
          <CarouselNext class="absolute"> </CarouselNext>
        </div>
        <NuxtLink
          to="/"
          class="mt-3 uppercase text-[#1B1B1B] underline underline-offset-4"
          >View all</NuxtLink
        >
      </div>
      <CarouselContent
        class="mt-14 flex items-center *:basis-1/5 *:pl-5 *:text-sm xl-max:*:basis-1/3 lg-max:*:basis-1/2 md-max:*:text-xs"
      >
        <CarouselItem v-for="item in 8" :key="item">
          <NuxtLink to="/">
            <NuxtImg
              class="object-cover"
              width="411px"
              height="411px"
              src="/images/home/featured-cars/car-5.jpg"
              alt="featured car 1"
            />
          </NuxtLink>
          <NuxtLink to="/" class="mt-4 flex flex-col gap-2 text-left">
            <span>"ROLLIN' BEAUTY" - BUICK RIVIERA</span>
            <span>$25,000 - $45,000</span>
          </NuxtLink>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </section>
</template>

<script setup lang="ts"></script>
