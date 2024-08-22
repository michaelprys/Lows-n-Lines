<template>
  <div>
    <form
      class="mt-10 rounded-[2px] bg-white p-5 text-black dark:bg-[#28292c] dark:text-dark-el"
      ref="container"
      @submit.prevent="submitForm"
      novalidate
    >
      <div class="relative">
        <span class="block text-2xl font-semibold">Sign in</span>
        <ItemStatus />
      </div>
      <div class="mt-5 flex flex-col gap-5">
        <FormField v-slot="{ field }" name="email">
          <FormItem>
            <FormControl>
              <input
                class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                placeholder="Email"
                type="email"
                id="email"
                v-bind="field"
                v-model="signInData.email"
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
                  class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                  type="password"
                  placeholder="Password"
                  v-bind="field"
                  v-model="signInData.password"
                  autocomplete="on"
                />
                <ButtonVisibility />
              </div>
            </FormControl>
            <FormMessage class="text-[#ff3434]" />
          </FormItem>
        </FormField>

        <div class="flex items-center gap-2 *:cursor-pointer">
          <Checkbox
            class="rounded-[2px] transition duration-75"
            id="remember-me"
          />
          <label class="select-none" for="remember-me">Remember me</label>
        </div>

        <div class="flex items-center justify-between">
          <NuxtLink
            class="underline transition-colors hover:text-gray-500"
            to="/"
            >Forgot password?</NuxtLink
          >
          <button
            class="rounded-sm border border-[#f0a5a7] bg-[#F19899] px-6 py-2 transition-colors hover:border-[#f7c2c3] hover:bg-[#ffb9bb] dark:text-black"
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
    <span class="mb-10 mt-5 block text-center text-white"
      >Don't have an account?<NuxtLink
        class="ml-1.5 text-[#000000]"
        to="/sign-up"
        >Create one</NuxtLink
      ></span
    >
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/valibot";

const { signedIn, successMessage, error: fetchError, signIn } = useStoreAuth();

definePageMeta({
  layout: "auth",
});

const signInData = ref<SignInData>({
  email: "",
  password: "",
});

const router = useRouter();

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(signInSchema),
});

const submitForm = handleSubmit(async () => {
  if (signedIn.value) {
    console.log("Login successful");
    return;
  }

  await signIn(signInData.value);
});

router.afterEach(() => {
  if (signedIn.value) {
    setTimeout(() => {
      signedIn.value = false;
      successMessage.value = "";
    }, 1500);
  }
  if (fetchError.value) {
    fetchError.value = "";
  }
});
</script>
