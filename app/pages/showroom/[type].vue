<script setup lang="ts">
const { vehicles, selectVehicle } = useStoreVehicle();
</script>

<template>
    <ItemObserver v-slot="{ isVisible }">
        <ul
            class="mt-10 grid grid-cols-3 place-items-center gap-x-5 gap-y-10 xl-max:grid-cols-2 sm-max:grid-cols-1"
            :class="isVisible ? 'fade-in' : 'invisible'">
            <li
                v-for="item in vehicles"
                :key="item.id"
                class="h-full w-full shadow-lg transition-shadow hover:shadow-xl dark:bg-[#1b1b1c]">
                <NuxtLink :to="`/vehicle-details/${item.slug}`" @click="selectVehicle(item.id)">
                    <NuxtImg
                        class="h-[289px] w-full object-cover"
                        :src="getSrc('/vehicles/cover', item.cover_name, '.jpg')"
                        :width="item.cover_width"
                        :height="item.cover_height"
                        :alt="`${item.cover_name} image`" />
                    <div class="px-4">
                        <span class="mt-4 block text-sm font-semibold text-zinc-600 dark:text-[#999999]"
                            >{{ item.manufacture_year }}
                            {{ item.brand }}
                            {{ item.model }}</span
                        >
                        <ul class="mt-4 flex gap-4 text-xs">
                            <li class="font-semibold text-[#595959]">
                                <ul class="flex list-disc flex-wrap gap-2 text-zinc-600 *:ml-4 dark:text-[#7e7e7e]">
                                    <li>{{ item.engine_type }}</li>
                                    <li>
                                        {{ item.transmission_type }}
                                    </li>
                                    <li>{{ item.miles }}m</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-6 flex flex-col bg-[#F8F8F8] px-4 py-2 dark:bg-[#222324]">
                        <span class="block text-xs font-semibold text-zinc-600 dark:text-[#7e7e7e]">Current price</span>
                        <span class="mt-1 block text-xl font-semibold text-zinc-700 dark:text-dark-el">{{
                            item.price
                        }}</span>
                    </div></NuxtLink
                >
            </li>
        </ul>
    </ItemObserver>
</template>
