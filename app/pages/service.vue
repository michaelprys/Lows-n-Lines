<template>
  <section class="container mb-24 mt-10">
    <h1 class="font-['Gin-Test'] text-5xl xl-max:text-4xl md-max:text-3xl">
      Old or new, we fix it for you
    </h1>
    <div
      class="mt-14 flex items-start gap-16 xl-max:flex-col-reverse xl-max:gap-8 lg-max:gap-8"
    >
      <div>
        <p>
          <strong
            >At Lows 'n' Lines, we specialize in the sale, service, and
            customization of lowriders of all years, makes, and models.</strong
          >
          Our full-time mechanics are experts in lowrider culture and ASE
          certified, capable of working on a 2023 Chevy Impala as easily as a
          classic 1964 Chevrolet Impala SS and everything and anything in
          between. Our lowrider mechanics love these cars, drive these cars, and
          know every detail under the hood.
        </p>
        <p class="mt-4">
          Our rates are competitive in many cases, they are less than your
          neighborhood general garage and less than other classic car specialty
          shops. Our in-house team includes experienced specialists in
          automotive repair, detailing, transport, and storage. Our Service Team
          has a combined 150 years experience in automotive excellence. Great
          value, with great client service too. We're also a licensed Maine
          State Inspection Station too. No job too big or small.
        </p>
        <p class="mt-4">
          <strong
            >To schedule service or get an estimate, email us at
            <span class="text-[#d61616]">service@lowsnlines.com</span> or call
            at <span class="text-[#d61616]">207-602-6620</span></strong
          >.
        </p>
        <p class="mt-4">
          Payment is required after service and before your vehicle can be
          picked up. For larger jobs, we require a 50% deposit (or other
          negotiated amount) to start the work and the balance in full at the
          time of completion. For significant restoration projects that may take
          months, we collect a deposit upfront and bill twice per month for the
          duration of the job. Unpaid vehicles left for more than 30 days will
          incur a $100/month (or each fraction thereof) storage fee, and any
          vehicle left unpaid for more than 90 days on our premises will be
          considered abandoned by the owner.
        </p>
      </div>
      <NuxtImg
        class="w-full max-w-[615] rounded-md object-cover xl-max:mx-auto"
        src="/images/service/service.jpg"
        width="615"
        height="277"
        alt="service image"
      />
    </div>

    <form class="mt-24 xl-max:mt-16">
      <h2 class="text-center font-['Gin-Test'] text-3xl">Contact us</h2>
      <ul class="mt-7 grid grid-cols-2 gap-x-7 gap-y-5 *:flex *:flex-col">
        <li>
          <label class="font-semibold" for="first-name">First Name</label>
          <input
            class="mt-1 rounded-[2px] border border-[#BDBDBD] px-4 py-2"
            type="text"
            id="first-name"
            placeholder="First Name*"
          />
        </li>
        <li>
          <label class="font-semibold" for="last-name">Last Name</label>
          <input
            class="mt-1 rounded-[2px] border border-[#BDBDBD] px-4 py-2"
            type="text"
            id="last-name"
            placeholder="Last Name *"
          />
        </li>
        <li>
          <label class="font-semibold" for="phone-number">Phone Number</label>
          <input
            class="mt-1 rounded-[2px] border border-[#BDBDBD] px-4 py-2"
            type="text"
            id="phone-number"
            placeholder="Phone Number *"
          />
        </li>
        <li>
          <label class="font-semibold" for="email-address">Email Address</label>
          <input
            class="mt-1 rounded-[2px] border border-[#BDBDBD] px-4 py-2"
            type="text"
            id="email-address"
            placeholder="Email Address *"
          />
        </li>
      </ul>
      <div class="mt-5 flex flex-col">
        <label class="font-semibold" for="message">Message</label>
        <textarea
          class="mt-1 resize-none rounded-[2px] border border-[#C2C2C2] px-4 py-4"
          name=""
          id="message"
          cols="30"
          rows="10"
          placeholder="I'd like to detail the issues with my vehicle or the services I'm requesting."
        ></textarea>

        <NuxtLink
          class="mx-auto mt-10 block max-w-48 rounded-[3px] border border-[#e5ddac] bg-[#F1E798] px-9 py-4 text-center text-sm uppercase"
          to="/"
        >
          Send message
        </NuxtLink>
      </div>
    </form>
  </section>
</template>
