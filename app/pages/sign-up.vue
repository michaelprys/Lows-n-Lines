<template>
  <div>
    <form
      class="my-10 rounded-[2px] bg-white p-5 dark:bg-[#28292c] dark:text-dark-el"
      @submit.prevent="signUp"
      novalidate
    >
      <div class="relative">
        <span class="block text-2xl font-semibold">Sign up</span>
        <Transition name="error">
          <span
            v-if="fetchError || successMessage"
            class="absolute right-0 top-1/2 -translate-y-1/2 text-xl font-bold"
            :class="[fetchError ? 'text-[#ff3434]' : 'text-[#28b13f]']"
          >
            {{ fetchError ? fetchError : successMessage }}
          </span>
        </Transition>
        <Transition name="error">
          <span
            v-if="fetchError"
            class="absolute right-0 top-1/2 -translate-y-1/2 text-lg font-bold"
            :class="[fetchError ? 'text-[#ff3434]' : 'text-[#28b13f]']"
          >
          </span>
        </Transition>
      </div>

      <div class="mt-5 flex flex-col gap-5">
        <FormField v-slot="{ field }" name="firstname">
          <FormItem>
            <FormControl>
              <input
                class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                type="text"
                id="firstname"
                placeholder="First Name"
                v-bind="field"
                v-model="user.firstname"
              />
            </FormControl>
            <FormMessage class="text-[#ff3434]" />
          </FormItem>
        </FormField>

        <FormField v-slot="{ field }" name="lastname">
          <FormItem>
            <FormControl>
              <input
                class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                type="text"
                id="lastname"
                placeholder="Last Name"
                v-bind="field"
                v-model="user.lastname"
              />
            </FormControl>
            <FormMessage class="text-[#ff3434]" />
          </FormItem>
        </FormField>

        <FormField v-slot="{ field }" name="email">
          <FormItem>
            <FormControl>
              <input
                class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                type="email"
                id="email"
                placeholder="Email"
                v-bind="field"
                v-model="user.email"
              />
            </FormControl>
            <FormMessage class="text-[#ff3434]" />
          </FormItem>
        </FormField>

        <FormField v-slot="{ field }" name="password">
          <FormItem>
            <FormControl>
              <div class="relative" id="password">
                <input
                  class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                  type="password"
                  placeholder="Password"
                  v-bind="field"
                  v-model="user.password"
                  autocomplete="on"
                />
                <ButtonVisibility />
              </div>
            </FormControl>
            <FormMessage class="text-[#ff3434]" />
          </FormItem>
        </FormField>

        <FormField v-slot="{ field }" name="confirmPassword">
          <FormItem>
            <FormControl>
              <div class="relative" id="confirm-password">
                <input
                  class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                  type="password"
                  placeholder="Confirm Password"
                  v-bind="field"
                  v-model="user.confirmPassword"
                  autocomplete="on"
                />
                <ButtonVisibility />
              </div>
            </FormControl>
            <FormMessage class="text-[#ff3434]" />
          </FormItem>
        </FormField>

        <div class="flex items-center justify-end">
          <button
            class="rounded-sm border border-[#f0a5a7] bg-[#F19899] px-6 py-2 transition-colors hover:border-[#f7c2c3] hover:bg-[#ffb9bb] dark:text-black"
            :class="{
              'sign-up cursor-not-allowed rounded-md border-transparent bg-gray-300 px-4 py-2 opacity-50 hover:border-transparent hover:bg-gray-300':
                registered,
            }"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/valibot";
import { useStoreAuth } from "~/stores/auth";
import type { UserData } from "~/stores/auth";

definePageMeta({
  layout: "auth",
});

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(formSchema),
});

const store = useStoreAuth();
const { registerUser } = store;
const { error: fetchError, successMessage, registered } = storeToRefs(store);

const user = ref<UserData>({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  member_since: new Date(),
});

const router = useRouter();

const signUp = handleSubmit(async () => {
  if (registered.value) {
    return;
  }

  await registerUser(user.value);
  if (registered.value) {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }
});

router.afterEach(() => {
  if (registered.value) {
    setTimeout(() => {
      registered.value = false;
      successMessage.value = "";
    }, 1500);
  }
  if (fetchError.value) {
    fetchError.value = "";
  }
});
</script>

<style scoped>
.sign-up {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
  transition-duration: 200ms;
}
</style>
