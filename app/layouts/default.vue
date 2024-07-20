<template>
  <header class="bg-[#F4F6F8]">
    <nav
      class="relative flex min-h-[10.875rem] items-center px-14 font-['Inter-Medium'] extra-max:grid extra-max:grid-rows-3 extra-max:px-5"
    >
      <button
        @click="toggleDrawer"
        class="row-start-2 hidden md-max:block"
        type="button"
      >
        <img src="/images/icons/hamburger.svg" loading="lazy" alt="menu icon" />
      </button>

      <ul
        class="text-md row-start-3 flex flex-1 items-center gap-10 extra-max:justify-self-center md-max:hidden"
      >
        <li v-for="link in linksPrimary" :key="link.name">
          <NuxtLink
            class="relative py-2 transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:bg-gray-500 before:transition-[width] before:duration-500 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[2px] after:w-0 after:origin-center after:bg-gray-500 after:transition-[width] after:duration-500 after:ease-in-out hover:text-gray-500 hover:before:w-[50%] hover:after:w-[50%]"
            active-class=""
            :to="link.route"
            >{{ link.name }}
          </NuxtLink>
        </li>
      </ul>

      <ul class="row-start-2 flex flex-1 items-center justify-end gap-10">
        <!-- <li><NuxtLink to="/">Profile</NuxtLink></li> -->
        <!-- <li><NuxtLink to="/">Log Out</NuxtLink></li> -->
        <li>
          <NuxtLink class="flex items-center gap-2" to="/"
            ><span class="lg-max:hidden">Log In</span>
            <img
              class="image"
              src="/images/icons/login.svg"
              loading="lazy"
              alt="login icon"
          /></NuxtLink>
        </li>
      </ul>
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

  <ItemDrawer v-model:open="isOpen" :linksPrimary="linksPrimary" />

  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const router = useRouter();

const linksPrimary = ref([
  { name: "Home", route: "/" },
  { name: "Showroom", route: "/showroom" },
  { name: "Service Center", route: "/service" },
  { name: "Events", route: "/events" },
  { name: "About Us", route: "/about" },
  { name: "Gallery", route: "/gallery" },
]);

const isOpen = ref(false);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};

router.afterEach(() => {
  if (isOpen.value) {
    toggleDrawer();
  }
});
</script>
