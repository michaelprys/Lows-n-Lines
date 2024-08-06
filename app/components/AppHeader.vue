<template>
  <header class="border-b bg-[#F4F6F8]">
    <nav
      class="relative flex min-h-[10.875rem] items-center px-14 font-['Inter-Medium'] extra-max:grid extra-max:grid-rows-3 extra-max:px-5"
    >
      <ItemObserver
        class="row-start-2 hidden md-max:block"
        v-slot="{ isVisible }"
      >
        <button
          class="opacity-0"
          :class="{ 'fade-in': isVisible }"
          @click="toggleDrawer"
          type="button"
        >
          <img src="/icons/hamburger.svg" loading="lazy" alt="menu icon" />
        </button>
      </ItemObserver>

      <ItemObserver
        class="row-start-3 extra-max:justify-self-center md-max:hidden"
        v-slot="{ isVisible }"
      >
        <ul
          class="text-md flex flex-1 items-center gap-10 opacity-0"
          :class="{ 'fade-in': isVisible }"
        >
          <li v-for="link in linksPrimary" :key="link.name">
            <NuxtLink
              class="relative py-2 transition-colors ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:bg-zinc-500 before:transition-[width] before:duration-500 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[2px] after:w-0 after:origin-center after:bg-zinc-500 after:transition-[width] after:duration-500 after:ease-in-out hover:text-zinc-500 hover:before:w-[50%] hover:after:w-[50%]"
              active-class=""
              :to="link.route"
              >{{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </ItemObserver>

      <ItemObserver
        class="row-start-2 flex flex-1 items-center justify-end gap-10"
        v-slot="{ isVisible }"
      >
        <ul class="opacity-0" :class="{ 'fade-in': isVisible }">
          <!-- <li><NuxtLink to="/">Profile</NuxtLink></li> -->
          <!-- <li><NuxtLink to="/">Log Out</NuxtLink></li> -->
          <li>
            <NuxtLink class="flex items-center gap-2" to="/sign-in"
              ><span class="lg-max:hidden">Log In</span>
              <img
                class="image"
                src="/icons/sign-in.svg"
                loading="lazy"
                alt="sign-in icon"
            /></NuxtLink>
          </li>
        </ul>
      </ItemObserver>

      <NuxtLink to="/">
        <NuxtImg
          class="md-mx absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover extra-max:pb-7 md-max:w-48 md-max:pb-0 extra-min:pb-0"
          to="/"
          src="/images/logo.png"
          width="240"
        />
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps(["toggleDrawer", "linksPrimary"]);
</script>
