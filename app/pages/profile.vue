<template>
    <div class="relative">
        <ItemGlobalBg />
        <nav>
            <ItemObserver v-slot="{ isVisible }">
                <div
                    class="relative min-h-[12.25rem] w-full bg-cover bg-center"
                    :class="isVisible ? 'fade-in' : 'invisible'"
                    style="background-image: url('/images/profile/head.jpg')">
                    <div class="min-h-[230px] w-full pt-8">
                        <NuxtImg
                            class="mx-auto rounded-full border-2 object-cover"
                            src="/images/profile/avatar.jpg"
                            width="134"
                            height="134"
                            alt="avatar image" />
                        <span
                            class="mt-3 block text-center uppercase text-white"
                            >Lance Wilson</span
                        >
                    </div>

                    <div
                        class="flex justify-center gap-2 pb-8 text-white *:flex *:items-center *:gap-x-1 *:bg-[#ffffff1f] *:px-5 *:py-2">
                        <NuxtLink class="link transition-colors" to="/profile">
                            <IconUser />
                            Profile
                        </NuxtLink>
                        <NuxtLink
                            class="link transition-colors"
                            to="/profile/saved-cars">
                            <IconFavorite />
                            Saved cars
                        </NuxtLink>
                    </div>
                </div>
            </ItemObserver>
        </nav>

        <div>
            <NuxtPage />
        </div>
    </div>
</template>

<style scoped>
.link {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.1875rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.link:hover {
    background: rgba(255, 255, 255, 0.35);
}
</style>
