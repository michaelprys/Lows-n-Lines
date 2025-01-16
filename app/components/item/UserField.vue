<script setup lang="ts">
defineProps({
    isOpen: Boolean,
    displayedData: {
        type: String,
        default: '',
    },
    pending: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="flex w-full items-center gap-7 pl-3">
        <div class="flex w-full items-center">
            <Skeleton class="h-4 w-full max-w-80 bg-slate-50" v-if="pending" />
            <div class="flex w-full items-center" v-else>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
