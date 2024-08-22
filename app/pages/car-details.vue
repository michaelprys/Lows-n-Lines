<template>
  <div class="container mt-7">
    <ItemObserver v-slot="{ isVisible }">
      <div class="opacity-0" :class="{ 'fade-in': isVisible }">
        <div
          class="flex items-center justify-between md-max:flex-col md-max:gap-5"
        >
          <h1
            class="text-center text-2xl uppercase text-[#808080] dark:text-[#9f9f9f]"
          >
            Chevrolet Impala - 1964
          </h1>
          <div class="flex items-center gap-8">
            <span class="text-xl uppercase text-[#808080] dark:text-[#9f9f9f]"
              >$53,000</span
            >
            <button
              class="rounded-sm border border-[#e5ddac] bg-[#F1E798] p-4 uppercase transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black md-max:p-2 md-max:text-xs"
            >
              Print inverntory
            </button>
          </div>
        </div>

        <ItemGallery />
      </div>
    </ItemObserver>

    <div class="mb-24 rounded-[2px] pb-10">
      <div>
        <ItemObserver v-slot="{ isVisible }">
          <h2
            class="mt-10 text-center font-['Gin-Test'] text-3xl uppercase opacity-0"
            :class="{ 'fade-in': isVisible }"
          >
            Description
          </h2>
        </ItemObserver>

        <div>
          <ItemObserver v-slot="{ isVisible }">
            <div class="opacity-0" :class="{ 'fade-in': isVisible }">
              <p class="mt-8 text-lg uppercase">
                Welcome to Lows 'n' Lines Service Center
              </p>

              <p class="mt-2">
                At Lows 'n' Lines, we welcome trade offers for other vintage
                lowriders and classic cars. We offer easy financing options to
                help you get the car of your dreams! With nearly 15 years of
                experience, we have sold thousands of classic and lowrider
                vehicles. We assist with all transportation arrangements,
                offering several transport options to deliver your car locally,
                anywhere in the USA, or around the world. Lows 'n' Lines is a
                licensed lowrider showroom, and our Service Center provides
                repair and maintenance services for all makes and models, both
                old and new. We also offer appraisal, vehicle locator, pick-up
                or delivery, and storage services. Our Showroom & Service Center
                is conveniently located at 2564 Portland Road (US Route 1),
                Arundel, Maine on US Route 1. We're just 90 minutes north of
                Boston and 20 minutes south of Portland, Maine. Visit us
                Monday-Saturday from 8:30am to 5pm. Call us anytime at
                207.602.6620 or email us at info@lowsnlines.com.
              </p>
            </div>
          </ItemObserver>

          <ItemObserver v-slot="{ isVisible }">
            <h3
              class="mt-5 text-2xl font-semibold opacity-0"
              :class="{ 'fade-in': isVisible }"
            >
              Vitals
            </h3>
          </ItemObserver>

          <ItemObserver v-slot="{ isVisible }">
            <ul
              class="mt-5 list-disc pl-[17px] opacity-0"
              :class="{ 'fade-in': isVisible }"
            >
              <li>Odometer: 45,000 miles</li>
              <li>Paint: Candy Apple Red</li>
              <li>Tires: Whitewall</li>
              <li>Upholstery: White Leather</li>
              <li>Door Panels: Red and White</li>
              <li>Headliner: White</li>
              <li>Steering System: Hydraulic Steering</li>
              <li>Engine: 5.7L V8</li>
              <li>Brakes: Disc Brakes</li>
              <li>Transmission: 4 Speed Automatic</li>
              <li>Battery: 12 Volt with Dual Batteries for Hydraulics</li>
            </ul>
          </ItemObserver>
        </div>
      </div>

      <div>
        <ItemObserver v-slot="{ isVisible }">
          <h2
            class="mt-10 text-center font-['Gin-Test'] text-2xl uppercase opacity-0"
            :class="{ 'fade-in': isVisible }"
          >
            Vehicle specs
          </h2>
        </ItemObserver>

        <ItemObserver v-slot="{ isVisible }">
          <div
            class="mt-10 grid grid-cols-4 gap-x-8 opacity-0 md-max:grid-cols-2 md-max:gap-y-8"
            :class="{ 'fade-in': isVisible }"
          >
            <div>
              <h3 class="text-2xl">Basic</h3>
              <hr class="my-4 border-[#BDBDBD]" />
              <ul class="*:flex *:flex-col">
                <li>
                  <span class="mt-0 font-semibold">Year</span
                  ><span class="mt-1">2006</span>
                </li>
                <li>
                  <span class="mt-4 font-semibold">Make</span
                  ><span class="mt-1">Pontiac</span>
                </li>
                <li>
                  <span class="mt-4 font-semibold">Model</span
                  ><span class="mt-1">Solstice</span>
                </li>
                <li>
                  <span class="mt-4 font-semibold">Miles</span
                  ><span class="mt-1">33,000</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl">Engine</h3>
              <hr class="my-4 border-[#BDBDBD]" />
              <ul class="*:flex *:flex-col">
                <li>
                  <span class="mt-0 font-semibold">Engine Type</span
                  ><span class="mt-1">Gasoline</span>
                </li>
                <li>
                  <span class="mt-4 font-semibold">Engine Size</span
                  ><span class="mt-1">4 Cylinder Engine</span>
                </li>
                <li>
                  <span class="mt-4 font-semibold">Transmission Type</span
                  ><span class="mt-1">5 Speed Manual</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl">Body</h3>
              <hr class="my-4 border-[#BDBDBD]" />
              <ul class="*:flex *:flex-col">
                <li>
                  <span class="mt-0 font-semibold">Body Color</span
                  ><span class="mt-1">Blue</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl">Interior</h3>
              <hr class="my-4 border-[#BDBDBD]" />
              <ul class="*:flex *:flex-col">
                <li>
                  <span class="mt-0 font-semibold">Interior Color</span
                  ><span class="mt-1">Black</span>
                </li>
              </ul>
            </div>
          </div>
        </ItemObserver>
      </div>

      <div>
        <ItemObserver v-slot="{ isVisible }">
          <h2
            class="mt-10 text-center font-['Gin-Test'] text-2xl uppercase opacity-0"
            :class="{ 'fade-in': isVisible }"
          >
            Contact
          </h2>
        </ItemObserver>

        <form class="mt-10" @submit="onSubmit">
          <ItemObserver v-slot="{ isVisible }">
            <div class="opacity-0" :class="{ 'fade-in': isVisible }">
              <ul class="grid grid-cols-2 gap-x-6 gap-y-5">
                <li class="flex flex-col gap-1">
                  <label class="font-semibold" for="first-name"
                    >First Name</label
                  >
                  <FormField v-slot="{ field }" name="firstName">
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
                </li>
                <li class="flex flex-col gap-1">
                  <label class="font-semibold" for="lastName">Last Name</label>
                  <FormField v-slot="{ field }" name="lastName">
                    <FormItem class="pt-1.5">
                      <FormControl>
                        <input
                          class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                          type="text"
                          id="lastName"
                          placeholder="Last Name"
                          v-bind="field"
                        />
                      </FormControl>
                      <FormMessage class="text-[#ff3434]" />
                    </FormItem>
                  </FormField>
                </li>
                <li class="flex flex-col gap-1">
                  <label class="font-semibold" for="phoneNumber"
                    >Phone Number</label
                  >
                  <FormField v-slot="{ field }" name="phoneNumber">
                    <FormItem class="pt-1.5">
                      <FormControl>
                        <input
                          class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                          type="text"
                          id="phoneNumber"
                          placeholder="Phone Number"
                          v-bind="field"
                        />
                      </FormControl>
                      <FormMessage class="text-[#ff3434]" />
                    </FormItem>
                  </FormField>
                </li>
                <li class="flex flex-col gap-1">
                  <label class="font-semibold" for="email">Email Address</label>
                  <FormField v-slot="{ field }" name="email">
                    <FormItem class="pt-1.5">
                      <FormControl>
                        <input
                          class="w-full rounded-[2px] border border-[#BDBDBD] px-4 py-2 dark:border-dark-border dark:bg-[#333536]"
                          type="text"
                          id="emailAddress"
                          placeholder="Email Address"
                          v-bind="field"
                        />
                      </FormControl>
                      <FormMessage class="text-[#ff3434]" />
                    </FormItem>
                  </FormField>
                </li>
              </ul>

              <div class="mt-5 flex flex-col">
                <div>
                  <label class="font-semibold" for="">Subject</label>
                  <Select>
                    <SelectTrigger
                      class="select mt-1 rounded-[2px] border border-[#BDBDBD] px-4 py-2 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536] dark:text-black"
                    >
                      <SelectValue
                        class="text-[1rem] text-zinc-400"
                        placeholder="Select a fruit"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup class="dark:bg-zinc-800 dark:text-dark-el">
                        <SelectLabel>Ask a question</SelectLabel>
                        <SelectItem
                          class="cursor-pointer transition-colors dark:hover:bg-zinc-700 dark:hover:text-dark-el"
                          value="apple"
                        >
                          Apple
                        </SelectItem>
                        <SelectItem
                          class="cursor-pointer transition-colors dark:hover:bg-zinc-700 dark:hover:text-dark-el"
                          value="banana"
                        >
                          Banana
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div class="mt-5 flex flex-col">
                  <FormField v-slot="{ field }" name="message">
                    <FormItem class="pt-1.5">
                      <FormControl>
                        <textarea
                          class="mt-1 w-full resize-none rounded-[2px] border border-[#C2C2C2] px-4 py-4 placeholder-zinc-400 dark:border-dark-border dark:bg-[#333536]"
                          name=""
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="I'd like to detail the issues with my vehicle or the services I'm requesting."
                          v-bind="field"
                        ></textarea>
                      </FormControl>
                      <FormMessage class="text-[#ff3434]" />
                    </FormItem>
                  </FormField>
                </div>
              </div>
            </div>
          </ItemObserver>
          <ItemObserver v-slot="{ isVisible }">
            <button
              class="mx-auto mt-10 block max-w-48 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] px-9 py-4 text-center text-sm uppercase opacity-0 transition-colors hover:border-[#e9e3b5] hover:bg-[#fff8c7] dark:text-black"
              :class="{ 'fade-in-up': isVisible }"
            >
              Send question
            </button>
          </ItemObserver>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dark .select :deep svg {
  stroke: #f2f2f2;
}
</style>
