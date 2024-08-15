<template>
  <div>
    <form
      class="my-10 rounded-[2px] bg-white p-5 dark:bg-[#28292c] dark:text-dark-el"
      @submit.prevent="signUp"
      novalidate
    >
      <span class="block text-2xl font-semibold">Sign up</span>
      <div class="mt-5 flex flex-col gap-5">
        <div class="text-[#ff3434]" v-if="error">{{ error }}</div>
        <div class="text-[#29be42]" v-else>{{ successMessage }}</div>
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
import {
  object,
  string,
  config,
  pipe,
  nonEmpty,
  minLength,
  regex,
  email,
  forward,
  partialCheck,
} from "valibot";
import { useStoreAuth } from "~/stores/auth";
import type { UserData } from "~/stores/auth";
import { parseDomain, ParseResultType } from "parse-domain";

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

const store = useStoreAuth();
const { registerUser } = store;
const { registered, error, successMessage } = storeToRefs(store);

const user = ref<UserData>({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  member_since: new Date(),
});

const signUp = handleSubmit(async () => {
  await registerUser(user.value);
  if (registered.value) {
    console.log("Registration successful");
  }
});
</script>
