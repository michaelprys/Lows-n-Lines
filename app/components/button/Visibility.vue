<template>
    <div>
        <button
            class="absolute right-3 top-1/2 -translate-y-1/2"
            type="button"
            v-show="visible">
            <IconUnhide />
        </button>
        <button
            class="absolute right-3 top-1/2 -translate-y-1/2"
            type="button"
            v-show="!visible">
            <IconHide />
        </button>
    </div>
</template>

<script setup>
defineProps(['visible']);
</script>
