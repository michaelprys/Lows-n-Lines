<template>
    <div class="relative">
        <section class="container pb-24 pt-11">
            <ItemObserver v-slot="{ isVisible }">
                <h1
                    class="text-center font-['Gin-Test'] text-4xl drop-shadow-xl text-zinc-500 dark:text-white md-max:text-3xl"
                    :class="isVisible ? 'fade-in' : 'invisible'">
                    Gallery
                </h1>
            </ItemObserver>
            <div>
                <ul
                    class="mx-auto mt-11 columns-3 gap-3 md-max:columns-2 xs-max:columns-1"
                    ref="listEl">
                    <ItemObserver v-slot="{ isVisible }">
                        <li
                            class="break-inside-avoid mt-3 relative"
                            v-for="(item, idx) in imgList"
                            :key="item.id"
                            :class="isVisible ? 'fade-in' : 'invisible'">
                            <Skeleton
                                class="opacity-100 animate-none w-full h-3 bg-white"
                                :style="{
                                    height: `${item.skeleton_height}px`,
                                }"
                                v-if="pending" />
                            <NuxtImg
                                class="w-full cursor-pointer rounded-lg object-cover shadow-2xl"
                                :src="getSrc('gallery', item.name, '.jpg')"
                                :width="item.width"
                                :height="item.height"
                                :alt="`gallery image ${idx}`"
                                fit="cover"
                                @click="showImg(idx)"
                                v-else />
                        </li>
                    </ItemObserver>
                </ul>

                <ItemObserver v-slot="{ isVisible }">
                    <button
                        class="mx-auto block mt-10 transition-colors pointer-events-none dark:fill-white"
                        type="button"
                        v-show="pending"
                        :class="isVisible ? 'fade-in' : 'invisible'">
                        <IconSpinner
                            class="animate-spin"
                            width="1.8em"
                            height="1.8em" />
                    </button>
                </ItemObserver>
            </div>

            <VueEasyLightbox
                class="lightbox"
                :imgs="getLightboxImg"
                :visible="visibleRef"
                :index="indexRef"
                :moveDisabled="true"
                @hide="onHide" />
        </section>
    </div>
</template>

<script setup lang="ts">
// import { useImage } from '@vueuse/core';

const { getSrc } = useStoreVehicle();
const { apiBase } = useRuntimeConfig().public;
const visibleRef = ref(false);
const indexRef = ref(0);
const imgList = ref<Image[]>([]);
const pending = ref(false);
const limit = 10;
const offset = 0;

const getImages = async () => {
    pending.value = true;
    try {
        const res = await $fetch(
            `${apiBase}/gallery-images?limit=${limit}&offset=${offset}`
        );
        imgList.value = res.data;
    } catch (e) {
        const err = ensureError(e) as ErrorResponse;
        console.error('Error fetching gallery images', err.message);
    } finally {
        pending.value = false;
    }
};

const getLightboxImg = computed(() => {
    return imgList.value.map(item => getSrc('gallery', item.name, '.jpg'));
});

const showImg = (index: number) => {
    indexRef.value = index;
    visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

onMounted(async () => {
    await getImages();
});
</script>

<style scoped>
.lightbox :deep(img) {
    width: 62.5rem;
    height: 41.6875rem;
    object-fit: cover;
}

.vel-modal {
    background-color: rgb(0, 0, 0, 0.8);
}
</style>
