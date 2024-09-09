<template>
    <div>
        <Transition name="error">
            <span
                v-show="fetchError"
                class="absolute right-0 top-1/2 -translate-y-1/2 text-xl font-bold text-[#ff3434]"
            >
                {{ fetchError }}
            </span>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const { error: fetchError } = useStoreAuth();
</script>
