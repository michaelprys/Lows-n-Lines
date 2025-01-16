<script setup>
import IconSpinner from '~/components/icon/Spinner.vue';

defineProps({
    pending: Boolean,
    styleAuth: Boolean,
    styleDanger: Boolean,
});
</script>

<template>
    <div class="flex justify-center items-center">
        <button
            class="mt-5 px-5 w-44 h-14 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] text-center text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
            :class="{
                'disabled:bg-zinc-300 disabled:text-zinc-500 disabled:border-zinc-400 disabled:shadow-none': pending,
            }"
            disabled
            v-if="pending">
            <span class="flex gap-2 items-center justify-center">
                <span>Please wait</span>
                <IconSpinner class="animate-spin" />
            </span>
        </button>
        <button
            class="mt-5 px-5 w-44 h-14 rounded-[3px] text-center text-sm uppercase transition-colors border dark:text-black"
            :class="[
                styleAuth
                    ? 'border-[#f0a5a7] bg-[#F19899] hover:border-[#f7c2c3] hover:bg-[#ffb9bb]'
                    : 'border-[#e5ddac] bg-[#F1E798] hover:border-[#e9e3b5] hover:bg-[#fff8c7]',
                styleDanger
                    ? 'border-red-900 bg-red-900  dark:text-white text-white hover:border-red-800 hover:bg-red-800'
                    : 'border-[#e5ddac] bg-[#F1E798] hover:border-[#e9e3b5] hover:bg-[#fff8c7]',
            ]"
            v-else>
            <span><slot></slot></span>
        </button>
    </div>
</template>
