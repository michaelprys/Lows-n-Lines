<template>
  <div>
    <AppHeader :toggleDrawer="toggleDrawer" :linksPrimary="linksPrimary" />
    <ItemDrawer v-model:open="isOpen" :linksPrimary="linksPrimary" />

    <div>
      <slot />
    </div>

    <AppFooter />
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
