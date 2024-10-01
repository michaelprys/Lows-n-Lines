<template>
    <div class="relative pb-24">
        <ItemObserver v-slot="{ isVisible }">
            <section
                class="relative w-full"
                :class="isVisible ? 'fade-in' : 'invisible'">
                <div
                    class="absolute flex h-full w-full items-center justify-center bg-[#526672] bg-opacity-25">
                    <h1
                        class="px-20 text-center font-['Gin-Test'] text-5xl uppercase text-[#f2f2f2] xl-max:text-4xl lg-max:text-3xl xs-max:text-xl">
                        Lowrider Fest In San Fernando Valley
                    </h1>
                </div>
                <video
                    class="h-[31.25rem] object-cover"
                    width="1920"
                    height="1080"
                    autoplay
                    loop
                    muted
                    preload="auto"
                    ref="videoRef">
                    <source src="~/assets/videos/Event.mp4" type="video/mp4" />
                </video>
            </section>
        </ItemObserver>
        <section class="container mt-16 w-full max-w-[1240px]">
            <ItemObserver v-slot="{ isVisible }">
                <div :class="isVisible ? 'fade-in' : 'invisible'">
                    <h3 class="mt-12 font-['Gin-Test'] text-xl uppercase">
                        Friday, Novemeber 27, 2024 | 11AM - 11PM
                    </h3>
                    <p class="mt-3">
                        Established in 2011, the
                        <strong>Lows 'n' Lines Lowrider Festival</strong> is
                        back at the <strong>Sunset Boulevard</strong>. This
                        event celebrates the rich heritage of lowriders,
                        showcasing the culture as a unique form of American folk
                        and contemporary art. Join us for a curated community
                        and cultural exhibition that explores and presents the
                        vibrant world of lowriders.
                    </p>
                </div>
            </ItemObserver>

            <ItemObserver v-slot="{ isVisible }">
                <h3
                    class="mt-10 text-center font-['Gin-Test'] text-3xl uppercase"
                    :class="isVisible ? 'fade-in' : 'invisible'">
                    location
                </h3>
            </ItemObserver>

            <ItemObserver v-slot="{ isVisible }">
                <div :class="isVisible ? 'fade-in-up' : 'invisible'">
                    <div
                        id="map"
                        class="z-0 mx-auto mt-10 h-[402px] w-full max-w-[1176px] shadow-xl"></div>
                </div>
            </ItemObserver>

            <ItemObserver v-slot="{ isVisible }">
                <p class="mt-14" :class="isVisible ? 'fade-in' : 'invisible'">
                    Operating days and hours may change without notice.
                    Management may deny entry for any reason. By entering Sunset
                    Boulevard, you assume all risk of personal injury and loss
                    or damage to property and hereby grant management worldwide
                    reproduction rights to use your name and likeness in all
                    media, including the internet, for purposes without further
                    compensation to you. You agree to hold management harmless
                    for any claims relating to personal injury, damage to
                    property, or use of your name and likeness.
                </p>
            </ItemObserver>

            <ItemObserver v-slot="{ isVisible }">
                <h3
                    class="mt-14 text-center font-['Gin-Test'] text-2xl uppercase"
                    :class="isVisible ? 'fade-in' : 'invisible'">
                    Lows 'n' Lines is supported by
                </h3>
            </ItemObserver>

            <ItemObserver v-slot="{ isVisible }">
                <div :class="isVisible ? 'fade-in-up' : 'invisible'">
                    <NuxtImg
                        class="mx-auto mt-11 w-full max-w-[242px] object-cover"
                        src="/images/events/sponsor.png"
                        width="673"
                        height="589"
                        alt="sponsor image"
                        fit="cover" />
                    <span
                        class="mt-2 block select-none text-center font-['Gin-Test'] text-6xl text-[#040707] dark:text-[#f2f2f2]"
                        >CASSIO
                    </span>
                </div>
            </ItemObserver>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { Map as LeafletMap } from 'leaflet';

let map: LeafletMap;

onMounted(async () => {
    const L = await import('leaflet');
    map = L.map('map').setView([34.299074, -118.45949], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    L.marker([34.299074, -118.45949]).addTo(map);
});
onBeforeUnmount(() => {
    if (map) {
        setTimeout(() => {
            map.off();
            map.remove();
        }, 300);
    }
});
</script>
