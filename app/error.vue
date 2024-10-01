<template>
    <div class="relative">
        <NuxtLayout>
            <div class="py-[7.3125rem] text-center">
                <h1 class="font-[Gin-Test] uppercase text-2xl">
                    {{ error.statusCode }} {{ error.statusMessage }}
                </h1>
                <p class="mt-6">
                    You may want to return to the
                    <NuxtLink class="text-[#F62634]" to="/"
                        >home page.</NuxtLink
                    >
                </p>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
defineProps(['error']);
</script>
