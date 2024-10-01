<template>
    <div class="relative flex px-8 lg-max:flex-col">
        <nav
            class="nav-bg w-full max-w-60 text-black *:py-2 lg-max:max-w-full lg-max:pl-0 extra-min:max-w-80">
            <ItemObserver v-slot="{ isVisible }">
                <div
                    class="px-8 dark:text-dark-el extra-max:px-2 lg-max:px-0"
                    :class="isVisible ? 'fade-in' : 'invisible'">
                    <div
                        class="relative mt-7 max-w-52 lg-max:mx-auto lg-max:max-w-[23rem]">
                        <NuxtLink to="/">
                            <IconSearch
                                class="absolute right-3 top-1/2 -translate-y-1/2"
                        /></NuxtLink>
                        <input
                            class="w-full rounded-[3px] border-2 border-zinc-200 py-2 pl-3 pr-12 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                            w-full
                            type="text"
                            placeholder="Search car" />
                    </div>

                    <h2
                        class="mt-8 text-2xl font-semibold text-zinc-700 dark:text-dark-el lg-max:text-center">
                        Vehicle types
                    </h2>

                    <ul
                        class="mt-8 flex flex-col justify-center gap-3 lg-max:flex-row">
                        <li v-for="(type, i) in types" :key="i">
                            <NuxtLink
                                class="transition-colors hover:text-gray-500 dark:hover:text-gray-300"
                                to="/"
                                >{{ type }}</NuxtLink
                            >
                        </li>
                    </ul>

                    <h2
                        class="mt-8 text-2xl font-semibold text-zinc-700 dark:text-dark-el lg-max:text-center">
                        Eras
                    </h2>

                    <ul
                        class="mt-8 flex flex-col justify-center gap-3 lg-max:flex-row lg-max:pb-5">
                        <li v-for="(era, i) in eras" :key="i">
                            <NuxtLink
                                class="transition-colors hover:text-gray-300"
                                to="/"
                                >{{ era }}</NuxtLink
                            >
                        </li>
                    </ul>
                </div>
            </ItemObserver>
        </nav>

        <section>
            <ItemObserver v-slot="{ isVisible }">
                <ul
                    class="mt-10 grid grid-cols-3 place-items-center gap-x-5 gap-y-10 xl-max:grid-cols-2 sm-max:grid-cols-1"
                    :class="isVisible ? 'fade-in' : 'invisible'">
                    <li
                        v-for="item in vehicles"
                        :key="item.id"
                        class="w-full h-full shadow-lg transition-shadow hover:shadow-xl dark:bg-[#1b1b1c]">
                        <NuxtLink to="/car-details">
                            <NuxtImg
                                class="h-[289px] w-full object-cover"
                                :src="
                                    getSrc(
                                        '/cars/cover',
                                        item.cover_name,
                                        '.jpg'
                                    )
                                "
                                :width="item.cover_width"
                                :height="item.cover_height"
                                :alt="`${item.cover_name} image`" />
                            <div class="px-4">
                                <span
                                    class="mt-4 block text-sm font-semibold text-zinc-600 dark:text-[#999999]"
                                    >{{ item.manufacture_year }}
                                    {{ item.brand }}
                                    {{ item.model }}</span
                                >
                                <ul class="mt-4 flex gap-4 text-xs">
                                    <li class="font-semibold text-[#595959]">
                                        <ul
                                            class="flex list-disc flex-wrap gap-2 text-zinc-600 *:ml-4 dark:text-[#7e7e7e]">
                                            <li>{{ item.engine_type }}</li>
                                            <li>
                                                {{ item.transmission_type }}
                                            </li>
                                            <li>{{ item.miles }}m</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div
                                class="mt-6 flex flex-col bg-[#F8F8F8] px-4 py-2 dark:bg-[#222324]">
                                <span
                                    class="block text-xs font-semibold text-zinc-600 dark:text-[#7e7e7e]"
                                    >Current price</span
                                >
                                <span
                                    class="mt-1 block text-xl font-semibold text-zinc-700 dark:text-dark-el"
                                    >{{ item.price }}</span
                                >
                            </div></NuxtLink
                        >
                    </li>
                </ul>
            </ItemObserver>

            <ItemObserver v-slot="{ isVisible }">
                <Pagination
                    class="flex justify-center py-20"
                    :class="isVisible ? 'fade-in-up' : 'invisible'"
                    v-slot="{ page }"
                    :total="100"
                    :sibling-count="1"
                    show-edges
                    :default-page="2">
                    <PaginationList
                        v-slot="{ items }"
                        class="flex items-center gap-1 *:border-none">
                        <PaginationFirst class="dark:bg-[#141414]" />
                        <PaginationPrev class="dark:bg-[#141414]" />

                        <template v-for="(item, idx) in items">
                            <PaginationListItem
                                class=""
                                v-if="item.type === 'page'"
                                :key="idx"
                                :value="item.value"
                                as-child>
                                <Button
                                    class="h-10 w-10 bg-transparent p-0 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                                    :class="{
                                        'bg-zinc-400 text-white hover:bg-zinc-500 dark:bg-zinc-500 dark:hover:bg-zinc-600':
                                            item.value === page,
                                    }"
                                    :variant="
                                        item.value === page
                                            ? 'default'
                                            : 'outline'
                                    ">
                                    {{ item.value }}
                                </Button>
                            </PaginationListItem>
                            <PaginationEllipsis
                                v-else
                                :key="item.type"
                                :index="index" />
                        </template>

                        <PaginationNext class="dark:bg-[#141414]" />
                        <PaginationLast class="dark:bg-[#141414]" />
                    </PaginationList>
                </Pagination>
            </ItemObserver>
        </section>
    </div>
</template>

<script setup lang="ts">
const types = ['Classic', 'Hydraulic', 'Retro', 'Cruiser', 'Convertible'];
const eras = ['2010s+', '2000s', '1990s', '1980s', '1970s', '1960s'];

const { getSrc, vehicles, getVehicle } = useStoreVehicle();

onMounted(async () => {
    await getVehicle();
});
</script>
