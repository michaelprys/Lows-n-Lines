<template>
    <section>
        <ItemObserver v-slot="{ isVisible }">
            <div class="relative" :class="isVisible ? 'fade-in' : 'invisible'">
                <div class="relative">
                    <div
                        class="absolute h-full w-full bg-black opacity-10"></div>
                    <div
                        class="intro min-h-[43rem] bg-cover bg-center"
                        style="background-position: 25% 85%"
                        :style="bg"></div>
                </div>
                <NuxtLink
                    class="absolute bottom-36 left-20 mt-12 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] px-12 py-4 text-sm uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black lg-max:px-6 lg-max:text-xs md-max:static md-max:mx-auto md-max:flex md-max:max-w-44 md-max:justify-center md-max:px-2 md-max:py-4 md-max:text-center"
                    to="/showroom">
                    Visit our showroom
                </NuxtLink>
            </div>
        </ItemObserver>
    </section>
</template>

<script setup>
const img = useImage();
const bg = computed(() => {
    const imgUrl = img('/images/home/intro/intro.jpg');
    return { backgroundImage: `url('${imgUrl}')` };
});
</script>
