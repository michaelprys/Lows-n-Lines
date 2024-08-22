<template>
  <div>
    <Transition name="error">
      <span
        v-if="fetchError || successMessage"
        class="absolute right-0 top-1/2 -translate-y-1/2 text-xl font-bold"
        :class="[fetchError ? 'text-[#ff3434]' : 'text-[#28b13f]']"
      >
        {{ fetchError || successMessage }}
      </span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { successMessage, error: fetchError } = useStoreAuth();
</script>
