<template>
  <section class="relative flex flex-col items-center">
    <div class="relative">
      <div class="absolute h-full w-full bg-black opacity-10"></div>
      <NuxtImg
        class="min-h-[41.5rem] object-cover"
        width="1922"
        height="664"
        src="/images/home/intro/intro.jpg"
      />
    </div>
    <NuxtLink
      class="border-1 mt-14 rounded-[3px] border-[#DDD499] bg-[#F1E798] px-12 py-4 text-sm uppercase lg-max:px-6 lg-max:text-xs md-min:absolute md-min:bottom-36 md-min:left-20"
      to="/showroom"
    >
      Visit our showroom
    </NuxtLink>
  </section>
</template>

<script setup>
const img = useImage();

const backgroundStyles = computed(() => {
  const imgUrl = img("/images/home/intro/intro.jpg", { width: 100 });
  return { backgroundImage: `url('${imgUrl}')` };
});
</script>
