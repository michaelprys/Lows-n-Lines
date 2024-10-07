<template>
    <div class="mx-auto mt-7">
        <Carousel @init-api="val => (emblaMainApi = val)">
            <CarouselContent>
                <CarouselItem v-for="item in imgList" :key="item.id">
                    <NuxtImg
                        class="embla__image h-[525px] object-cover"
                        :src="
                            getSrc(`/vehicles/${item.slug}`, item.name, '.jpg')
                        "
                        :width="item.width"
                        :height="item.height"
                        :alt="`${item.name} image`"
                        fit="cover" />
                </CarouselItem>
            </CarouselContent>

            <button
                class="embla__btn-left transition-colors"
                @click="emblaMainApi?.scrollPrev()">
                <IconArrow class="mx-auto rotate-180" />
            </button>
            <button
                class="embla__btn-right transition-colors"
                @click="emblaMainApi?.scrollNext()">
                <IconArrow class="mx-auto" />
            </button>
        </Carousel>

        <Carousel class="mt-2" @init-api="val => (emblaThumbnailApi = val)">
            <CarouselContent class="m-0 flex gap-1">
                <CarouselItem
                    class="embla-thumbs__slide"
                    v-for="(item, idx) in imgList"
                    :key="item.id"
                    @click="onThumbClick(idx)">
                    <NuxtImg
                        class="h-24 object-cover"
                        :class="[
                            'embla-thumbs__image',
                            {
                                'embla-thumbs__image--active':
                                    idx === selectedIdx,
                            },
                        ]"
                        :src="
                            getSrc(`/vehicles/${item.slug}`, item.name, '.jpg')
                        "
                        :width="item.width"
                        :height="item.height"
                        :alt="`${item.name} image`"
                        fit="cover" />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { getSrc } from '~/utils/getSrc';
import { watchOnce } from '@vueuse/core';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

const route = useRoute();

const { vehicleImages } = useStoreVehicleImgs(route);

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIdx = ref(0);

function onSelect() {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
    selectedIdx.value = emblaMainApi.value.selectedScrollSnap();
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
    emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, emblaMainApi => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
});

const id = useCookie('selectedVehicle');

const imgList = computed(() => {
    return (
        vehicleImages.value?.data.filter(
            item => item.vehicle_id === Number(id.value)
        ) || []
    );
});
</script>

<style scoped>
.embla__image {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    border-radius: 0.5rem;
    width: 100%;
}
.embla__btn-left,
.embla__btn-right {
    position: absolute;
    top: 50%;
    width: 2.8rem;
    height: 2.8rem;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
}
.embla__btn-left:hover,
.embla__btn-right:hover {
    background-color: rgba(255, 255, 255, 0.4);
}

@media (width <= 39.9375rem) {
    .embla__btn-left,
    .embla__btn-right {
        width: 2.425rem;
        height: 2.425rem;
    }
}
.embla__btn-left :deep(svg),
.embla__btn-right :deep(svg) {
    width: 1.25rem;
    height: 1.25rem;
}
.embla__btn-left {
    left: 10px;
}
.embla__btn-right {
    right: 10px;
}
.embla-thumbs__slide {
    flex: 0 0 22%;
    min-width: 0;
    padding-left: var(--thumbs-slide-spacing);
}
.embla-thumbs__image {
    border: 2px solid transparent;
    border-radius: 0.5rem;
    filter: grayscale(0.4);
    filter: brightness(0.5);
}
.embla-thumbs__image--active {
    border-radius: 0.5rem;
    filter: grayscale(0);
    filter: brightness(1);
    border-color: rgba(0, 0, 0, 0.37);
}
</style>
