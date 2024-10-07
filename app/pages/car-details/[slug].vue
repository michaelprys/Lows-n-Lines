<template>
    <div class="relative">
        <div class="container pt-10">
            <ItemObserver v-slot="{ isVisible }">
                <div :class="isVisible ? 'fade-in' : 'invisible'">
                    <div
                        class="flex items-center justify-between md-max:flex-col md-max:gap-5">
                        <h1
                            class="`text`-center text-2xl uppercase text-[#808080] dark:text-[#9f9f9f]">
                            {{ selectedVehicle?.brand }}
                            {{ selectedVehicle?.model }}
                        </h1>
                        <div class="flex items-center gap-8">
                            <span
                                class="text-xl uppercase text-[#808080] dark:text-[#9f9f9f]"
                                >${{ selectedVehicle?.price }}</span
                            >
                            <button
                                class="rounded-sm border border-[#e5ddac] bg-[#F1E798] p-4 uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black md-max:p-2 md-max:text-xs"
                                @click="printInventory">
                                Print inverntory
                            </button>
                        </div>
                    </div>

                    <ItemGallery />
                </div>
            </ItemObserver>

            <div class="rounded-[2px] pb-24">
                <div>
                    <ItemObserver v-slot="{ isVisible }">
                        <h2
                            class="mt-10 text-center font-['Gin-Test'] text-3xl uppercase"
                            :class="isVisible ? 'fade-in' : 'invisible'">
                            Description
                        </h2>
                    </ItemObserver>

                    <div>
                        <ItemObserver v-slot="{ isVisible }">
                            <div :class="isVisible ? 'fade-in' : 'invisible'">
                                <p class="mt-8 text-lg uppercase">
                                    Welcome to Lows 'n' Lines Service Center
                                </p>

                                <p class="mt-2">
                                    At Lows 'n' Lines, we welcome trade offers
                                    for other vintage lowriders and classic
                                    cars. We offer easy financing options to
                                    help you get the car of your dreams! With
                                    nearly 15 years of experience, we have sold
                                    thousands of classic and lowrider vehicles.
                                    We assist with all transportation
                                    arrangements, offering several transport
                                    options to deliver your car locally,
                                    anywhere in the USA, or around the world.
                                    Lows 'n' Lines is a licensed lowrider
                                    showroom, and our Service Center provides
                                    repair and maintenance services for all
                                    makes and models, both old and new. We also
                                    offer appraisal, vehicle locator, pick-up or
                                    delivery, and storage services. Our Showroom
                                    & Service Center is conveniently located at
                                    2564 Portland Road (US Route 1), Arundel,
                                    Maine on US Route 1. We're just 90 minutes
                                    north of Boston and 20 minutes south of
                                    Portland, Maine. Visit us Monday-Saturday
                                    from 8:30am to 5pm. Call us anytime at
                                    207.602.6620 or email us at
                                    info@lowsnlines.com.
                                </p>
                            </div>
                        </ItemObserver>

                        <ItemObserver v-slot="{ isVisible }">
                            <h3
                                class="mt-5 text-2xl font-semibold"
                                :class="isVisible ? 'fade-in' : 'invisible'">
                                Vitals
                            </h3>
                        </ItemObserver>

                        <ItemObserver v-slot="{ isVisible }">
                            <ul
                                class="mt-5 list-disc pl-[17px]"
                                :class="isVisible ? 'fade-in' : 'invisible'">
                                <li>
                                    Odometer: {{ selectedVehicle?.miles }} miles
                                </li>
                                <li>
                                    Paint: {{ selectedVehicle?.body_color }}
                                </li>
                                <li>Tires: {{ selectedVehicle?.tires }}</li>
                                <li>
                                    Upholstery:
                                    {{ selectedVehicle?.upholstery }}
                                </li>
                                <li>Door Panels:</li>
                                <li>Headliner: White</li>
                                <li>Steering System: Hydraulic Steering</li>
                                <li>
                                    Engine: {{ selectedVehicle?.engine_type }}
                                    {{ selectedVehicle?.engine_size }}
                                </li>
                                <li>Brakes: {{ selectedVehicle?.brakes }}</li>
                                <li>
                                    Transmission:
                                    {{ selectedVehicle?.transmission_type }}
                                </li>
                                <li>Battery: {{ selectedVehicle?.battery }}</li>
                            </ul>
                        </ItemObserver>
                    </div>
                </div>

                <div>
                    <ItemObserver v-slot="{ isVisible }">
                        <h2
                            class="mt-10 text-center font-['Gin-Test'] text-2xl uppercase"
                            :class="isVisible ? 'fade-in' : 'invisible'">
                            Vehicle specs
                        </h2>
                    </ItemObserver>

                    <ItemObserver v-slot="{ isVisible }">
                        <div
                            class="mt-10 grid grid-cols-4 gap-x-8 md-max:grid-cols-2 md-max:gap-y-8"
                            :class="isVisible ? 'fade-in' : 'invisible'">
                            <div>
                                <h3 class="text-2xl">Basic</h3>
                                <hr class="my-4 border-[#BDBDBD]" />
                                <ul class="*:flex *:flex-col">
                                    <li>
                                        <span class="mt-0 font-semibold"
                                            >Year</span
                                        ><span class="mt-1">{{
                                            selectedVehicle?.manufacture_year
                                        }}</span>
                                    </li>
                                    <li>
                                        <span class="mt-4 font-semibold"
                                            >Brand</span
                                        ><span class="mt-1">{{
                                            selectedVehicle?.brand
                                        }}</span>
                                    </li>
                                    <li>
                                        <span class="mt-4 font-semibold"
                                            >Model</span
                                        ><span class="mt-1">{{
                                            selectedVehicle?.model
                                        }}</span>
                                    </li>
                                    <li>
                                        <span class="mt-4 font-semibold"
                                            >Miles</span
                                        ><span class="mt-1">{{
                                            selectedVehicle?.miles
                                        }}</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 class="text-2xl">Engine</h3>
                                <hr class="my-4 border-[#BDBDBD]" />
                                <ul class="*:flex *:flex-col">
                                    <li>
                                        <span class="mt-0 font-semibold"
                                            >Engine Type</span
                                        ><span class="mt-1">{{
                                            selectedVehicle?.engine_type
                                        }}</span>
                                    </li>
                                    <li>
                                        <span class="mt-4 font-semibold"
                                            >Engine Size</span
                                        ><span class="mt-1">{{
                                            selectedVehicle?.engine_size
                                        }}</span>
                                    </li>
                                    <li>
                                        <span class="mt-4 font-semibold"
                                            >Transmission Type</span
                                        ><span class="mt-1">{{
                                            selectedVehicle?.transmission_type
                                        }}</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 class="text-2xl">Body</h3>
                                <hr class="my-4 border-[#BDBDBD]" />
                                <ul class="*:flex *:flex-col">
                                    <li>
                                        <span class="mt-0 font-semibold"
                                            >Body Color</span
                                        ><span class="mt-1">{{
                                            selectedVehicle?.body_color
                                        }}</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 class="text-2xl">Interior</h3>
                                <hr class="my-4 border-[#BDBDBD]" />
                                <ul class="*:flex *:flex-col">
                                    <li>
                                        <span class="mt-0 font-semibold"
                                            >Interior Color</span
                                        >
                                        <span class="mt-1">{{
                                            selectedVehicle?.interior_color
                                        }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ItemObserver>
                </div>

                <ItemMessageForm>
                    <div class="mt-4">
                        <label class="font-semibold" for="">Subject</label>
                        <Select v-model="messageData.subject">
                            <SelectTrigger
                                class="select mt-1 rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536] dark:text-black">
                                <SelectValue
                                    class="text-[1rem] text-zinc-400"
                                    placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup
                                    class="bg-white dark:bg-zinc-800 dark:text-dark-el">
                                    <SelectLabel>Ask a question</SelectLabel>
                                    <SelectItem
                                        class="cursor-pointer transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-dark-el"
                                        value="Vehicle Interest">
                                        Vehicle Interest
                                    </SelectItem>
                                    <SelectItem
                                        class="cursor-pointer transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-dark-el"
                                        value="Financing Options">
                                        Financing Options
                                    </SelectItem>
                                    <SelectItem
                                        class="cursor-pointer transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-dark-el"
                                        value="Test Drive">
                                        Test Drive
                                    </SelectItem>
                                    <SelectItem
                                        class="cursor-pointer transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-dark-el"
                                        value="Other">
                                        Other
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <ItemInputMessage
                            :fieldName="'subject'"
                            :issues="issues" />
                    </div>
                </ItemMessageForm>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { messageData, issues } = useFormSubmission();
const { vehicles } = useStoreVehicle();

const printInventory = () => {
    window.print();
};

const id = useCookie('selectedVehicle');
const selectedVehicle = vehicles.value?.data.find(
    (item: Vehicle) => item.id === Number(id.value)
);
</script>

<style scoped>
.dark .select :deep(svg) {
    stroke: #f2f2f2;
}
</style>
