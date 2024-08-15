<template>
  <div>
    <form
      class="mt-10 rounded-[2px] bg-white p-5 text-black dark:bg-[#28292c] dark:text-dark-el"
      ref="container"
      @submit.prevent="signIn"
      novalidate
    >
      <span class="block text-2xl font-semibold">Sign in</span>
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
              />
            </FormControl>
            <FormMessage class="text-[#ff3434]" />
          </FormItem>
        </FormField>

        <FormField v-slot="{ field }" name="password">
          <FormItem>
            <FormControl>
              <input
                class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                placeholder="Password"
                type="password"
                id="password"
                v-bind="field"
              />
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
        class="ml-1.5 font-bold text-[#f09797]"
        to="/sign-up"
        >Create one</NuxtLink
      ></span
    >
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/valibot";
import {
  object,
  string,
  config,
  pipe,
  email,
  nonEmpty,
  minLength,
} from "valibot";

definePageMeta({
  layout: "auth",
});

const formSchema = toTypedSchema(
  config(
    object({
      email: pipe(
        string("Email is required"),
        email("Requires a format example@gmail.com"),
        nonEmpty(),
      ),
      password: pipe(
        string("Password is required"),
        minLength(6, "Password must be at least 6 characters long"),
        nonEmpty(),
      ),
    }),
    {
      abortPipeEarly: true,
    },
  ),
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const signIn = handleSubmit(() => {});
</script>
