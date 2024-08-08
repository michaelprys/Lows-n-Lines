<template>
  <section
    class="container mt-32 flex lg-max:mt-28 lg-max:flex-col lg-max:items-center md-max:mt-24"
  >
    <div class="flex w-full max-w-[715px]">
      <div class="m-w-[365px] lg-max:pl-7">
        <ItemObserver v-slot="{ isVisible }">
          <NuxtImg
            class="relative z-10 mt-10 object-cover opacity-0 lg-max:ml-0"
            :class="{ 'fade-in-up': isVisible }"
            src="/images/home/owner/owner-car.jpg"
            width="365"
            height="309"
            alt="owner car photo"
          />
        </ItemObserver>
      </div>
      <div class="m-w-[365px]">
        <ItemObserver v-slot="{ isVisible }">
          <NuxtImg
            class="z-10 -ml-7 object-cover opacity-0 lg-max:pl-0"
            :class="{ 'fade-in-up-delayed': isVisible }"
            src="/images/home/owner/owner.jpg"
            width="365"
            height="309"
            alt="LA TORTUGA photo"
          />
        </ItemObserver>
      </div>
    </div>
    <div class="w-full max-w-[715px] pl-[30px] lg-max:mt-10 lg-max:pl-0">
      <ItemObserver v-slot="{ isVisible }">
        <div class="opacity-0" :class="{ 'fade-in': isVisible }">
          <h1 class="font-[Gin-Test] text-xl uppercase">
            Michael 'LA TORTUGA'
          </h1>
          <p class="mt-5">
            Meet Michael, the guy behind Lows 'n' Lines, where he's been living
            and breathing these cars for as long as anyone can remember. Growing
            up, he soaked in every detail of lowriding culture, and now he's the
            go-to guy in the neighborhood for turning old-school rides into
            straight-up masterpieces. He's known for his killer designs and
            serious attention to detail.
          </p>
          <p class="mt-8">
            When Michael's not in the shop, you'll often spot him rolling down
            the street in his silver 'Tata'.
          </p>
          <NuxtLink
            class="transition-colorshover:border-[#e9e3b5] mt-9 block max-w-32 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] py-3 text-center text-sm uppercase transition-colors hover:bg-[#fff8c7] dark:text-black"
            to="/"
          >
            Read more
          </NuxtLink>
        </div>
      </ItemObserver>
    </div>
  </section>
</template>

<style scoped>
.fade-in-up-delayed {
  animation: fadeInUp 0.3s 0.3s forwards;
}
</style>
