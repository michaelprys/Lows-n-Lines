<script setup>
defineProps({
    show: Boolean,
    toggle: Boolean,
});
</script>

<template>
    <button class="absolute right-3 top-1/2 -translate-y-1/2" type="button" @click="toggle">
        <IconUnhide v-show="show" />
        <IconHide v-show="!show" />
    </button>
</template>
