<template>
  <div>
    <form
      class="my-10 rounded-[2px] bg-white p-5 dark:bg-[#28292c] dark:text-dark-el"
      @submit.prevent="onSubmit"
      novalidate
    >
      <span class="block text-2xl font-semibold">Sign up</span>
      <div class="mt-5 flex flex-col gap-5">
        <FormField v-slot="{ field }" name="firstname">
          <FormItem>
            <FormControl>
              <input
                class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                type="text"
                id="first-name"
                placeholder="First Name"
                v-bind="field"
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
                id="last-name"
                placeholder="Last Name"
                v-bind="field"
              />
            </FormControl>
            <FormMessage class="text-[#ff3434]" />
          </FormItem>
        </FormField>

        <FormField v-slot="{ field }" name="password">
          <FormItem>
            <FormControl>
              <div class="relative">
                <input
                  class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                  type="password"
                  id="password"
                  placeholder="Password"
                  v-bind="field"
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
              <div class="relative">
                <input
                  class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  v-bind="field"
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
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { toTypedSchema } from "@vee-validate/valibot";
import {
  object,
  string,
  config,
  pipe,
  nonEmpty,
  minLength,
  regex,
  forward,
  partialCheck,
} from "valibot";

definePageMeta({
  layout: "auth",
});

const letters = new RegExp(/^\p{L}+$/u);

const formSchema = toTypedSchema(
  pipe(
    config(
      object({
        firstname: pipe(
          string("First name is required"),
          nonEmpty(),
          regex(letters, "First name must consist of letters"),
        ),
        lastname: pipe(
          string("Last name is required"),
          nonEmpty(),
          regex(letters, "Last name must consist of letters"),
        ),
        password: pipe(
          string("Password is required"),
          minLength(6, "Password must be at least 6 characters long"),
          nonEmpty(),
        ),
        confirmPassword: pipe(string("Confirm password"), nonEmpty()),
      }),
      {
        abortPipeEarly: true,
      },
    ),
    forward(
      partialCheck(
        [["password"], ["confirmPassword"]],
        (input) => input.password === input.confirmPassword,
        "Passwords do not match",
      ),
      ["confirmPassword"],
    ),
  ),
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log("Successfully submitted!", values);
});
</script>
