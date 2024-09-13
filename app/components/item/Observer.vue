<template>
    <div ref="observerRef">
        <slot :isVisible="isVisible" />
    </div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps({
    rootMargin: {
        type: String,
        default: '0px',
    },
});

const observerRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
    setTimeout(() => {
        if (!observerRef.value) return;

        const { stop } = useIntersectionObserver(
            observerRef,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    isVisible.value = isIntersecting;
                    stop();
                }
            },
            {
                rootMargin: props.rootMargin,
            }
        );
    }, 0);
});
</script>
