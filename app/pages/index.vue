<template>
  <div>
    <NuxtLayout>
      <section class="flex flex-col items-center">
        <div class="relative">
          <div class="absolute h-full w-full bg-black opacity-10"></div>
          <NuxtImg
            class="min-h-[41.5rem] object-cover"
            src="/images/intro/intro.jpg"
          />
        </div>

        <NuxtLink
          class="border-1 mt-14 rounded-[3px] border-[#DDD499] bg-[#F1E798] px-12 py-4 text-sm uppercase md-min:absolute md-min:bottom-[17rem] md-min:left-20"
          to="/showroom"
        >
          Visit our showroom
        </NuxtLink>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup></script>

<style></style>
