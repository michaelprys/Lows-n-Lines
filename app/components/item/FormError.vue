<script setup lang="ts">
const { error: fetchError } = useStoreAuth();

const router = useRouter();

router.afterEach(() => {
    setTimeout(() => {
        fetchError.value = null;
    }, 300);
});
</script>

<template>
    <div>
        <Transition name="error">
            <span
                v-show="fetchError"
                class="absolute right-0 top-1/2 -translate-y-1/2 text-xl font-bold text-[#ff3434]">
                {{ fetchError }}
            </span>
        </Transition>
    </div>
</template>
