<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { ToastViewport, type ToastViewportProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<
    ToastViewportProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ToastViewport
        v-bind="delegatedProps"
        :class="
            cn(
                '[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[9999] outline-none',
                props.class
            )
        " />
</template>
