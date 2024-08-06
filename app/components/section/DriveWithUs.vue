<template>
  <div>
    <ItemObserver v-slot="{ isVisible }">
      <section
        class="container mt-36 flex flex-col items-center justify-center text-center md-max:mt-24"
      >
        <div class="max-w-[50rem] opacity-0" :class="{ 'fade-in': isVisible }">
          <h1 class="font-[Gin-Test] text-2xl uppercase">Drive with us!</h1>
          <p class="mt-5">
            Get ready to hit the streets with style. Lows 'n' Lines is more than
            just a shop, we're a community. Customize your car, embrace the
            lowrider culture, and cruise with us!
          </p>
        </div>
      </section>
    </ItemObserver>
  </div>
</template>
