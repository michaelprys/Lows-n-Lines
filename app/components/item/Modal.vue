<template>
  <div>
    <Teleport to="body">
      <div class="modal-wrapper" @keydown.esc="closeModal">
        <Transition name="fade">
          <div
            v-if="isActive"
            class="absolute h-full w-full bg-black opacity-50"
          ></div>
        </Transition>

        <Transition name="pop" mode="out-in">
          <div ref="target">
            <NuxtImg
              class="fixed left-1/2 top-1/2 h-[41.6875rem] w-[62.5rem] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#000000d9]"
              :src="`${item}`"
              width="562"
              height="375"
              :alt="`gallery image ${idx}`"
              v-if="isActive"
            />
          </div>
        </Transition>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const target = ref(null);

onClickOutside(target, () => closeModal());
</script>
