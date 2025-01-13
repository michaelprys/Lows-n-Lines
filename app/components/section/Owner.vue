<template>
    <section class="container mt-32 flex xl-max:mt-20 xl-max:flex-col xl-max:items-center">
        <div class="flex w-full xl-max:justify-center max-w-[44.6875rem]">
            <div class="max-w-[22.8125rem] max-h-[19.3125rem]">
                <ItemObserver v-slot="{ isVisible }">
                    <NuxtImg
                        class="relative z-[8] mt-10 object-cover"
                        :class="isVisible ? 'fade-in-up' : 'invisible'"
                        src="/images/home/owner/owner-car.jpg"
                        width="365"
                        height="309"
                        alt="owner car photo"
                        fit="cover" />
                </ItemObserver>
            </div>
            <div class="max-w-[22.8125rem] max-h-[19.3125rem]">
                <ItemObserver v-slot="{ isVisible }">
                    <NuxtImg
                        class="z-5 -ml-7 object-cover lg-max:pl-0"
                        :class="isVisible ? 'fade-in-up-delayed' : 'invisible'"
                        src="/images/home/owner/owner.jpg"
                        width="365"
                        height="309"
                        alt="LA TORTUGA photo"
                        fit="cover" />
                </ItemObserver>
            </div>
        </div>
        <div class="w-full xl-max:pt-6 max-w-[44.6875rem] pl-[1.875em] xl-max:mt-20 xl-max:pl-0">
            <ItemObserver v-slot="{ isVisible }">
                <div :class="isVisible ? 'fade-in' : 'invisible'">
                    <h1 class="font-[Gin-Test] text-xl uppercase">Michael 'LA TORTUGA'</h1>
                    <p class="mt-5">
                        Meet Michael, the guy behind Lows 'n' Lines, where he's been living and breathing these cars for
                        as long as anyone can remember. Growing up, he soaked in every detail of lowriding culture, and
                        now he's the go-to guy in the neighborhood for turning old-school rides into straight-up
                        masterpieces. He's known for his killer designs and serious attention to detail.
                    </p>
                    <p class="mt-8">
                        When Michael's not in the shop, you'll often spot him rolling down the street in his silver
                        'Tata'.
                    </p>
                    <!-- <NuxtLink
                        class="transition-colorshover:border-[#e9e3b5] mt-9 block max-w-32 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] py-3 text-center text-sm uppercase transition-colors hover:bg-[#fff8c7] dark:text-black"
                        to="/">
                        Read more
                    </NuxtLink> -->
                </div>
            </ItemObserver>
        </div>
    </section>
</template>
