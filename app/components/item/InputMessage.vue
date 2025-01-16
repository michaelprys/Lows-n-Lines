<script setup lang="ts">
const props = defineProps({
    fieldName: {
        type: [String, null],
        required: true,
        default: '',
    },
    issues: {
        type: Object,
        required: false,
        default: () => ({}),
    },
});
</script>

<template>
    <template v-if="issues?.[fieldName] && issues[fieldName].length > 0">
        <div class="text-[#ff3434]" v-for="(issue, idx) in issues[fieldName]" :key="idx">
            {{ issue }}
        </div>
        <slot></slot>
    </template>
</template>
