<template>
  <header class="header w-full" :class="{ active: isHidden }" ref="el">
    <div class="header-bg absolute min-h-[10.875rem] w-full"></div>
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
          <IconHamburger
            class="stroke-black hover:stroke-gray-500 dark:stroke-white"
            aria-label="drawer menu icon"
          />
        </button>
      </ItemObserver>

      <ItemObserver
        class="row-start-3 extra-max:justify-self-center md-max:hidden"
        v-slot="{ isVisible }"
      >
        <ul
          class="text-md `dark:text-dark-el` flex flex-1 items-center gap-10 opacity-0"
          :class="{ 'fade-in': isVisible }"
        >
          <li v-for="link in linksPrimary" :key="link.name">
            <NuxtLink
              class="duration-[350ms] relative py-2 transition-colors before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:bg-zinc-500 before:transition-[width] before:duration-500 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[2px] after:w-0 after:origin-center after:bg-zinc-500 after:transition-[width] after:duration-500 after:ease-in-out hover:text-zinc-500 hover:before:w-[50%] hover:after:w-[50%] dark:before:bg-zinc-300 dark:after:bg-zinc-300 dark:hover:text-zinc-300"
              active-class=""
              :to="link.route"
              >{{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </ItemObserver>

      <ItemObserver
        class="row-start-2 flex flex-1 justify-end"
        v-slot="{ isVisible }"
      >
        <div
          class="flex gap-10 opacity-0 lg-max:gap-4"
          :class="{ 'fade-in': isVisible }"
        >
          <div>
            <button @click="setColorTheme()">
              <IconDarkMode
                class="stroke-[#33363F] dark:stroke-dark-el"
                aria-label="dark mode icon"
              />
            </button>
          </div>
          <div>
            <NuxtLink class="flex items-center gap-2" to="/sign-in">
              <span class="lg-max:hidden">Sign In</span>
              <IconSignInDark
                aria-label="sign in icon"
                v-show="$colorMode.preference === 'dark'"
              />
              <IconSignInLight
                aria-label="sign in icon"
                v-show="$colorMode.preference === 'light'"
              />
            </NuxtLink>
          </div>
        </div>
      </ItemObserver>

      <NuxtLink to="/">
        <NuxtImg
          v-show="$colorMode.preference === 'dark'"
          class="md-mx absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover extra-max:pb-7 md-max:w-48 md-max:pb-0 extra-min:pb-0"
          to="/"
          src="/images/logo-dark.png"
          width="240"
        />
        <NuxtImg
          v-show="$colorMode.preference === 'light'"
          class="md-mx absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover extra-max:pb-7 md-max:w-48 md-max:pb-0 extra-min:pb-0"
          to="/"
          src="/images/logo-light.png"
          width="240"
        />
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

defineProps(["toggleDrawer", "linksPrimary"]);

const { y } = useWindowScroll();
const el = ref(null);
const isHidden = ref(false);

const colorMode = useColorMode();

const setColorTheme = () => {
  const newTheme = colorMode.preference === "light" ? "dark" : "light";
  colorMode.preference = newTheme;
};

let lastScroll = y.value;
watchEffect(() => {
  if (lastScroll <= y.value && y.value >= 174) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }
  lastScroll = y.value;
});
</script>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, 0.85);
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.dark .header {
  background-color: rgba(33, 34, 36, 0.85);
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.header-bg {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
}
.active {
  transform: translateY(-100%);
}
</style>
