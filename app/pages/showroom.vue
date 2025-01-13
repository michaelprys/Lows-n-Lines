<script setup lang="ts">
const types = ['Classic', 'Hydraulic', 'Retro', 'Cruiser', 'Convertible'];
const eras = ['1960s', '1970s', '1980s', '1990s', '2000s+'];

const { getVehicleByType, vehicles, vehicleRefresh } = useStoreVehicle();

await vehicleRefresh();
</script>

<template>
    <div class="relative flex px-8 lg-max:flex-col">
        <nav class="nav-bg w-full max-w-60 text-black *:py-2 lg-max:max-w-full lg-max:pl-0 extra-min:max-w-80">
            <ItemObserver v-slot="{ isVisible }">
                <div
                    class="px-8 dark:text-dark-el extra-max:px-2 lg-max:px-0"
                    :class="isVisible ? 'fade-in' : 'invisible'">
                    <div class="relative mt-7 max-w-52 lg-max:mx-auto lg-max:max-w-[23rem]">
                        <NuxtLink to="/"> <IconSearch class="absolute right-3 top-1/2 -translate-y-1/2" /></NuxtLink>
                        <input
                            class="w-full rounded-[3px] border-2 border-zinc-200 py-2 pl-3 pr-12 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                            type="text"
                            placeholder="Search car" />
                    </div>

                    <h2 class="mt-8 text-2xl font-semibold text-zinc-700 dark:text-dark-el lg-max:text-center">
                        Vehicle types
                    </h2>

                    <ul class="mt-8 flex flex-col justify-center gap-3 lg-max:flex-row">
                        <li v-for="(item, idx) in types" :key="idx">
                            <NuxtLink
                                class="transition-colors hover:text-gray-500 dark:hover:text-gray-300"
                                :to="`/showroom/${item.toLowerCase()}`"
                                @click="getVehicleByType(item.toLowerCase())">
                                {{ item }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <h2 class="mt-8 text-2xl font-semibold text-zinc-700 dark:text-dark-el lg-max:text-center">Eras</h2>

                    <ul class="mt-8 flex flex-col justify-center gap-3 lg-max:flex-row lg-max:pb-5">
                        <li v-for="(era, i) in eras" :key="i">
                            <NuxtLink class="transition-colors hover:text-gray-300" to="/">{{ era }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </ItemObserver>
        </nav>

        <section>
            <NuxtPage />

            <ItemObserver v-slot="{ isVisible }">
                <Pagination
                    class="flex justify-center py-20"
                    :class="isVisible ? 'fade-in-up' : 'invisible'"
                    v-slot="{ page }"
                    :total="100"
                    :sibling-count="1"
                    show-edges
                    :default-page="2">
                    <PaginationList v-slot="{ items }" class="flex items-center gap-1 *:border-none">
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
                                    :variant="item.value === page ? 'default' : 'outline'">
                                    {{ item.value }}
                                </Button>
                            </PaginationListItem>
                            <PaginationEllipsis v-else :key="item.type" :index="idx" />
                        </template>

                        <PaginationNext class="dark:bg-[#141414]" />
                        <PaginationLast class="dark:bg-[#141414]" />
                    </PaginationList>
                </Pagination>
            </ItemObserver>
        </section>
    </div>
</template>
