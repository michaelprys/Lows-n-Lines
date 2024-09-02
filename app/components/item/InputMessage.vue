<template>
    <template v-if="issues?.[fieldName]">
        <div
            class="text-[#ff3434]"
            v-for="(issue, idx) in issues[fieldName]"
            :key="idx"
        >
            {{ issue }}
        </div>
    </template>
</template>

<script setup lang="ts">
defineProps({
    fieldName: {
        type: String,
        required: true,
    },
    issues: {
        type: Object,
        default: () => ({}),
        required: true,
    },
});
</script>
