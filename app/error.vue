<template>
  <div>
    <div class="my-[7.3125rem] text-center">
      <h1 class="font-[Gin-Test] text-2xl">
        {{ error.statusCode }} PAGE NOT FOUND
      </h1>
      <p class="mt-6">
        You may want to return to the
        <NuxtLink class="text-[#F62634]" to="/">home page.</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["error"]);
</script>
