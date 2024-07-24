<template>
  <div class="mb-24">
    <section class="relative min-h-[624px] w-full">
      <div class="absolute h-full w-full bg-[#526672] bg-opacity-25"></div>
      <div class="intro min-h-[624px] w-full"></div>
      <h1
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Gin-Test'] text-5xl uppercase text-white"
      >
        Lowrider Fest In San Fernando Valley
      </h1>
    </section>

    <section class="container mt-24 w-full max-w-[1240px] text-center">
      <div class="flex justify-center gap-6">
        <NuxtImg
          class="object-cover"
          src="/images/events/img-1.jpg"
          width="397"
          height="280"
          alt="event image 1"
        />
        <NuxtImg
          class="object-cover"
          src="/images/events/img-2.jpg"
          width="397"
          height="280"
          alt="event image 2"
        />
        <NuxtImg
          class="object-cover"
          src="/images/events/img-3.jpg"
          width="397"
          height="280"
          alt="event image 3"
        />
      </div>

      <h2 class="mt-24 font-['Gin-Test'] text-3xl uppercase">
        Lows 'n' Lines: San Fernando Valley Lowrider Festival
      </h2>
      <h3 class="mt-9 font-['Gin-Test'] text-2xl uppercase">
        Friday, Novemeber 27, 2024 | 11AM - 11PM
      </h3>
      <p class="mt-9">
        Established in 2011, the
        <strong>Lows 'n' Lines Lowrider Festival</strong> is back at the
        <strong>Sunset Boulevard</strong>. This event celebrates the rich
        heritage of lowriders, showcasing the culture as a unique form of
        American folk and contemporary art. Join us for a curated community and
        cultural exhibition that explores and presents the vibrant world of
        lowriders.
      </p>

      <h3 class="mt-20 font-['Gin-Test'] text-2xl uppercase">Location</h3>
      <NuxtImg
        class="mx-auto mt-9 object-cover shadow-2xl"
        src="/images/events/map.jpg"
        width="1044"
        height="402"
        alt="festival location on map"
      />

      <p class="mt-24">
        Operating days and hours may change without notice. Management may deny
        entry for any reason. By entering Sunset Boulevard, you assume all risk
        of personal injury and loss or damage to property and hereby grant
        management worldwide reproduction rights to use your name and likeness
        in all media, including the internet, for purposes without further
        compensation to you. You agree to hold management harmless for any
        claims relating to personal injury, damage to property, or use of your
        name and likeness.
      </p>
      <h3 class="mt-20 font-['Gin-Test'] text-2xl uppercase">
        Lows 'n' Lines is supported by
      </h3>

      <NuxtImg
        class="mx-auto mt-11 object-cover"
        src="/images/events/sponsor.png"
        width="242"
        height="113"
        alt="sponsor image"
      />
    </section>
  </div>
</template>

<style>
.intro {
  background-image: url("/images/events/header.jpg");
}
</style>
