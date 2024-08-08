<template>
  <section>
    <ItemObserver class="" v-slot="{ isVisible }">
      <div
        class="relative opacity-0 md-max:flex md-max:flex-col md-max:items-center"
        :class="{ 'fade-in': isVisible }"
      >
        <div class="relative">
          <div class="absolute h-full w-full bg-black opacity-10"></div>
          <NuxtImg
            class="min-h-[43rem] object-cover"
            width="1922"
            height="664"
            src="/images/home/intro/intro.jpg"
          />
        </div>
        <NuxtLink
          class="absolute bottom-36 left-20 mt-12 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] px-12 py-4 text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black lg-max:px-6 lg-max:text-xs md-max:static"
          to="/showroom"
        >
          Visit our showroom
        </NuxtLink>
      </div>
    </ItemObserver>
  </section>
</template>

<style scoped>
.fade-in-delayed {
  animation: fadeIn 0.7s forwards;
}
</style>
