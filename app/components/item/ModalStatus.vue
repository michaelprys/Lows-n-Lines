<template>
    <AlertDialog v-model:open="model">
        <AlertDialogContent class="p-8">
            <AlertDialogHeader>
                <AlertDialogTitle class="flex justify-center">
                    <div
                        class="flex flex-col items-center justify-center"
                        v-if="fetchError">
                        <IconError />
                        <span
                            class="mt-4 block text-center text-[1.6rem] text-red-400">
                            Error</span
                        >
                    </div>
                    <div
                        class="flex flex-col items-center justify-center"
                        v-else>
                        <IconSuccess />
                        <span
                            class="mt-4 block text-center text-[1.6rem] text-green-400"
                            >Success</span
                        >
                    </div>
                </AlertDialogTitle>

                <AlertDialogDescription class="sr-only"
                    >Please review the message above for the status of your
                    request. If you encountered an error, try again or contact
                    support for further assistance.
                </AlertDialogDescription>
            </AlertDialogHeader>

            <div
                class="text-md mt-2 flex items-center justify-center text-center"
                v-if="fetchError || successMessage">
                <span>{{ fetchError || successMessage }}</span>
            </div>

            <AlertDialogFooter>
                <button
                    class="mx-auto mt-4 rounded bg-zinc-700 px-5 py-2 uppercase transition-colors hover:bg-zinc-500"
                    @click="toggleModal">
                    Ok
                </button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>

<script setup lang="ts">
const { successMessage, error: fetchError } = useStoreAuth();

defineProps(['toggleModal']);

const model = defineModel();
</script>
