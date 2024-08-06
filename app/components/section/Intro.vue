<template>
  <section>
    <div class="md-max: relative flex-col md-max:flex md-max:items-center">
      <div class="relative">
        <div class="absolute z-20 h-full w-full bg-black opacity-10"></div>
        <NuxtImg
          class="min-h-[41.5rem] object-cover"
          width="1922"
          height="664"
          src="/images/home/intro/intro.jpg"
        />
      </div>
      <NuxtLink
        class="absolute bottom-36 left-20 mt-14 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] px-12 py-4 text-sm uppercase lg-max:px-6 lg-max:text-xs md-max:static"
        to="/showroom"
      >
        Visit our showroom
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.fade-in-delayed {
  animation: fadeIn 0.7s forwards;
}
</style>
