<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>

        <Teleport to="body">
            <Toaster />
        </Teleport>
    </div>
</template>
