<template>
  <section>
    <ItemObserver v-slot="{ isVisible }">
      <div
        class="relative md-max:flex md-max:flex-col md-max:items-center"
        :class="{ 'fade-in': isVisible }"
      >
        <div class="relative">
          <div class="absolute h-full w-full bg-black opacity-10"></div>
          <div class="intro"></div>
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
.intro {
  background-image: url("/images/home/intro/intro.jpg");
  background-size: cover;
  background-position: 25% 85%;
  background-repeat: no-repeat;
  min-height: 43rem;
}
</style>
