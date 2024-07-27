<template>
  <div class="mb-24">
    <section class="relative w-full">
      <div
        class="w- absolute flex h-full w-full items-center justify-center bg-[#526672] bg-opacity-25"
      >
        <h1
          class="xs-max:text-xl px-20 text-center font-['Gin-Test'] text-5xl uppercase text-white xl-max:text-4xl lg-max:text-3xl"
        >
          Lowrider Fest In San Fernando Valley
        </h1>
      </div>
      <video
        class="h-[500px] object-cover"
        width="1920"
        height="1080"
        autoplay
        loop
        muted
      >
        <source src="/videos/Event.mp4" type="video/mp4" />
      </video>
    </section>

    <section class="container mt-16 w-full max-w-[1240px]">
      <!-- <h2 class="font-['Gin-Test'] text-3xl uppercase">
        Lows 'n' Lines: San Fernando Valley Lowrider Festival
      </h2> -->
      <div class="mx-auto mt-12 w-full max-w-[640px]"></div>
      <h3 class="mt-12 font-['Gin-Test'] text-xl uppercase">
        Friday, Novemeber 27, 2024 | 11AM - 11PM
      </h3>
      <p class="mt-3">
        Established in 2011, the
        <strong>Lows 'n' Lines Lowrider Festival</strong> is back at the
        <strong>Sunset Boulevard</strong>. This event celebrates the rich
        heritage of lowriders, showcasing the culture as a unique form of
        American folk and contemporary art. Join us for a curated community and
        cultural exhibition that explores and presents the vibrant world of
        lowriders.
      </p>

      <h3 class="mt-10 text-center font-['Gin-Test'] text-3xl uppercase">
        Location
      </h3>

      <div class="mx-auto mt-10 h-[402px] w-full max-w-[1176px] shadow-xl">
        <LMap
          ref="map"
          :zoom="17"
          :center="[34.299074, -118.45949]"
          :use-global-leaflet="false"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            layer-type="base"
            name="OpenStreetMap"
          /><LMarker :lat-lng="[34.299074, -118.45949]" draggable />
        </LMap>
      </div>

      <p class="mt-14">
        Operating days and hours may change without notice. Management may deny
        entry for any reason. By entering Sunset Boulevard, you assume all risk
        of personal injury and loss or damage to property and hereby grant
        management worldwide reproduction rights to use your name and likeness
        in all media, including the internet, for purposes without further
        compensation to you. You agree to hold management harmless for any
        claims relating to personal injury, damage to property, or use of your
        name and likeness.
      </p>
      <h3 class="mt-14 text-center font-['Gin-Test'] text-2xl uppercase">
        Lows 'n' Lines is supported by
      </h3>

      <NuxtImg
        class="mx-auto mt-11 w-full max-w-[242px] object-cover"
        src="/images/events/sponsor.png"
        width="673"
        height="589"
        alt="sponsor image"
      />
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.intro {
  background-image: url("/images/events/header.jpg");
}
</style>
