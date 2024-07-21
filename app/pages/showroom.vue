<template>
  <div class="flex lg-max:flex-col">
    <nav
      class="w-full max-w-[17.5625rem] bg-[#487385] text-white lg-max:max-w-full"
    >
      <div class="container">
        <div class="mt-6 flex items-center gap-2">
          <NuxtLink class="" to="/">Home</NuxtLink>
          <img
            class="image"
            src="/images/icons/arrow-right.svg"
            loading="lazy"
            alt="arrow icon"
          />
          <NuxtLink class="" to="/">Showroom</NuxtLink>
        </div>

        <h2 class="pt-12 text-2xl font-semibold lg-max:text-center">
          Vehicle types
        </h2>

        <ul class="mt-5 flex flex-col justify-center gap-3 lg-max:flex-row">
          <li v-for="(type, i) in types" :key="i">
            {{ type }}
          </li>
        </ul>

        <h2 class="pt-12 text-2xl font-semibold lg-max:text-center">Eras</h2>

        <ul
          class="mt-5 flex flex-col justify-center gap-3 lg-max:flex-row lg-max:pb-12"
        >
          <li v-for="(era, i) in eras" :key="i">
            {{ era }}
          </li>
        </ul>
      </div>
    </nav>

    <section class="container mt-10">
      <h1
        class="text-center font-['Gin-Test'] text-3xl text-[#808080] lg-max:text-left"
      >
        Our cars
      </h1>

      <ul
        class="mt-10 grid grid-cols-3 place-items-center gap-x-5 gap-y-9 xl-max:grid-cols-2 sm-max:grid-cols-1"
      >
        <li
          v-for="car in 6"
          :key="car"
          class="w-full max-w-[447px] shadow-md transition-shadow hover:shadow-lg"
        >
          <NuxtLink to="/">
            <NuxtImg
              class="object-cover"
              src="/images/showroom/car-1.jpg"
              width="447"
              height="252"
              alt=""
            />
            <div class="px-4">
              <span class="mt-4 block text-sm font-semibold text-zinc-600"
                >1996 Mercedes-Benz R129 SL320</span
              >
              <ul class="mt-4 flex gap-4 text-xs">
                <li
                  class="font-semibold text-[#595959]"
                  v-for="(spec, i) in specs"
                  :key="i"
                >
                  <ul class="flex list-disc flex-wrap gap-2 *:ml-4">
                    <li>{{ spec.engine }}</li>
                    <li>{{ spec.fuel }}</li>
                    <li>{{ spec.mileage }}</li>
                    <li>{{ spec.transmission }}</li>
                    <li>{{ spec.gears }}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="mt-6 flex flex-col bg-[#F8F8F8] px-4 py-2">
              <span class="block text-xs font-semibold text-[#595959]"
                >Current bid</span
              >
              <span class="mt-1 block text-xl font-semibold text-zinc-600"
                >$35,000</span
              >
            </div></NuxtLink
          >
        </li>
      </ul>

      <Pagination
        class="just flex justify-center py-20"
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
          <PaginationFirst />
          <PaginationPrev />

          <template v-for="(item, index) in items">
            <PaginationListItem
              class=""
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <Button
                class="h-10 w-10 bg-transparent p-0 text-black transition-colors hover:bg-zinc-100"
                :class="{
                  'bg-[#487385] text-white hover:bg-[#487385]':
                    item.value === page,
                }"
                :variant="item.value === page ? 'default' : 'outline'"
              >
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis
              class="text-zinc-600"
              v-else
              :key="item.type"
              :index="index"
            />
          </template>

          <PaginationNext />
          <PaginationLast />
        </PaginationList>
      </Pagination>
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
