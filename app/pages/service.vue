<template>
    <div class="relative">
        <section class="container relative pb-24 pt-10">
            <div
                class="flex items-start gap-16 xl-max:flex-col-reverse xl-max:gap-8 lg-max:gap-8">
                <ItemObserver class="max-w-1/2 w-full" v-slot="{ isVisible }">
                    <div :class="isVisible ? 'fade-in' : 'invisible'">
                        <h1
                            class="font-['Gin-Test'] text-5xl xl-max:text-4xl md-max:text-3xl">
                            Rev up your ride
                        </h1>
                        <div class="mt-12">
                            <div>
                                <p>
                                    <strong
                                        >At Lows 'n' Lines, we specialize in the
                                        sale, service, and customization of
                                        lowriders of all years, makes, and
                                        models.</strong
                                    >
                                    Our full-time mechanics are experts in
                                    lowrider culture and ASE certified, capable
                                    of working on a 2023 Chevy Impala as easily
                                    as a classic 1964 Chevrolet Impala SS and
                                    everything and anything in between. Our
                                    lowrider mechanics love these cars, drive
                                    these cars, and know every detail under the
                                    hood.
                                </p>
                                <p class="mt-4">
                                    Our rates are competitive in many cases,
                                    they are less than your neighborhood general
                                    garage and less than other classic car
                                    specialty shops. Our in-house team includes
                                    experienced specialists in automotive
                                    repair, detailing, transport, and storage.
                                    Our Service Team has a combined 150 years
                                    experience in automotive excellence. Great
                                    value, with great client service too. We're
                                    also a licensed Maine State Inspection
                                    Station too. No job too big or small.
                                </p>
                                <p class="mt-4">
                                    <strong
                                        >To schedule service or get an estimate,
                                        email us at
                                        <span class="text-[#ff3434]"
                                            >service@lowsnlines.com</span
                                        >
                                        or call at
                                        <span class="text-[#ff3434]"
                                            >207-602-6620</span
                                        ></strong
                                    >.
                                </p>
                                <p class="mt-4">
                                    Payment is required after service and before
                                    your vehicle can be picked up. For larger
                                    jobs, we require a 50% deposit (or other
                                    negotiated amount) to start the work and the
                                    balance in full at the time of completion.
                                    For significant restoration projects that
                                    may take months, we collect a deposit
                                    upfront and bill twice per month for the
                                    duration of the job. Unpaid vehicles left
                                    for more than 30 days will incur a
                                    $100/month (or each fraction thereof)
                                    storage fee, and any vehicle left unpaid for
                                    more than 90 days on our premises will be
                                    considered abandoned by the owner.
                                </p>
                            </div>
                        </div>
                    </div>
                </ItemObserver>

                <ItemObserver class="max-w-1/2 w-full" v-slot="{ isVisible }">
                    <NuxtImg
                        class="mt-12 w-full h-full max-w-[615px] max-h-[277px] xl-max:max-h-[377px] xl-max:max-w-[715px] rounded-md object-cover xl-max:mx-auto xl-max:mt-0"
                        :class="isVisible ? 'fade-in-up-delayed' : 'invisible'"
                        src="/images/service/service.jpg"
                        width="615"
                        height="277"
                        alt="service image"
                        fit="cover" />
                </ItemObserver>
            </div>

            <ItemMessageForm />
        </section>
    </div>
</template>

<style scoped>
.fade-in-up-delayed {
    animation: fadeInUp 0.3s 0.1s forwards;
}
</style>
