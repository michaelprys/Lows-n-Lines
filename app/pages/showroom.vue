<template>
  <div class="flex px-8 lg-max:flex-col">
    <nav
      class="nav-bg w-full max-w-60 text-black *:py-2 lg-max:max-w-full lg-max:pl-0 extra-min:max-w-80"
    >
      <ItemObserver v-slot="{ isVisible }">
        <div
          class="container opacity-0 dark:text-dark-el"
          :class="{ 'fade-in': isVisible }"
        >
          <h2
            class="mt-8 text-2xl font-semibold text-zinc-700 dark:text-dark-el lg-max:text-center"
          >
            Vehicle types
          </h2>

          <ul class="mt-8 flex flex-col justify-center gap-3 lg-max:flex-row">
            <li v-for="(type, i) in types" :key="i">
              <NuxtLink class="transition-colors hover:text-gray-300" to="/">{{
                type
              }}</NuxtLink>
            </li>
          </ul>

          <h2
            class="mt-8 text-2xl font-semibold text-zinc-700 dark:text-dark-el lg-max:text-center"
          >
            Eras
          </h2>

          <ul
            class="mt-8 flex flex-col justify-center gap-3 lg-max:flex-row lg-max:pb-5"
          >
            <li v-for="(era, i) in eras" :key="i">
              <NuxtLink class="transition-colors hover:text-gray-300" to="/">{{
                era
              }}</NuxtLink>
            </li>
          </ul>
        </div>
      </ItemObserver>
    </nav>

    <section>
      <ItemObserver v-slot="{ isVisible }">
        <ul
          class="mt-10 grid grid-cols-3 place-items-center gap-x-5 gap-y-10 opacity-0 xl-max:grid-cols-2 sm-max:grid-cols-1"
          :class="{ 'fade-in': isVisible }"
        >
          <li
            v-for="car in 6"
            :key="car"
            class="w-full max-w-[447px] shadow-lg transition-shadow hover:shadow-xl dark:bg-[#1b1b1c]"
          >
            <NuxtLink to="/car-details">
              <NuxtImg
                class="object-cover"
                src="/images/showroom/car-1.jpg"
                width="447"
                height="252"
                alt="car image"
              />
              <div class="px-4">
                <span
                  class="mt-4 block text-sm font-semibold text-zinc-600 dark:text-[#999999]"
                  >1996 Mercedes-Benz R129 SL320</span
                >
                <ul class="mt-4 flex gap-4 text-xs">
                  <li
                    class="font-semibold text-[#595959]"
                    v-for="(spec, i) in specs"
                    :key="i"
                  >
                    <ul
                      class="flex list-disc flex-wrap gap-2 text-zinc-600 *:ml-4 dark:text-[#7e7e7e]"
                    >
                      <li>{{ spec.engine }}</li>
                      <li>{{ spec.fuel }}</li>
                      <li>{{ spec.mileage }}</li>
                      <li>{{ spec.transmission }}</li>
                      <li>{{ spec.gears }}</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div
                class="mt-6 flex flex-col bg-[#F8F8F8] px-4 py-2 dark:bg-[#222324]"
              >
                <span
                  class="block text-xs font-semibold text-zinc-600 dark:text-[#7e7e7e]"
                  >Current bid</span
                >
                <span
                  class="mt-1 block text-xl font-semibold text-zinc-700 dark:text-dark-el"
                  >$35,000</span
                >
              </div></NuxtLink
            >
          </li>
        </ul>
      </ItemObserver>

      <ItemObserver v-slot="{ isVisible }">
        <Pagination
          class="flex justify-center py-20 opacity-0"
          :class="{ 'fade-in-up': isVisible }"
          v-slot="{ page }"
          :total="100"
          :sibling-count="1"
          show-edges
          :default-page="2"
        >
          <PaginationList
            v-slot="{ items }"
            class="flex items-center gap-1 *:border-none"
          >
            <PaginationFirst class="dark:bg-[#141414]" />
            <PaginationPrev class="dark:bg-[#141414]" />

            <template v-for="(item, index) in items">
              <PaginationListItem
                class=""
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="h-10 w-10 bg-transparent p-0 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  :class="{
                    'bg-zinc-400 text-white hover:bg-zinc-500 dark:bg-zinc-500 dark:hover:bg-zinc-600':
                      item.value === page,
                  }"
                  :variant="item.value === page ? 'default' : 'outline'"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
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
const types = ["Classic", "Hydraulic", "Retro", "Cruiser", "Convertible"];
const eras = ["2010s+", "2000s", "1990s", "1980s", "1970s", "1960s"];
const specs = [
  {
    engine: "3199cc",
    fuel: "Petrol",
    mileage: "1522,1928 miles",
    transmission: "Automatic",
    gears: "5 speed",
  },
];
</script>
