<template>
  <Sheet v-model:open="model">
    <SheetContent
      class="max-w-80 border-none bg-[#dcdcdc] px-0"
      aria-describedby="undefined"
    >
      <SheetTitle class="sr-only">Menu</SheetTitle>
      <ul class="mt-10 flex flex-col">
        <li class="" v-for="link in linksPrimary" :key="link.route">
          <NuxtLink :to="link.route"
            ><Button
              class="relative w-full rounded-none bg-transparent py-8 text-lg text-black hover:bg-[#c7c7c7]"
            >
              <span class="absolute left-6">{{ link.name }}</span>
            </Button></NuxtLink
          >
        </li>
      </ul>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
defineProps(["linksPrimary"]);

const model = defineModel();
</script>

<style scoped></style>
