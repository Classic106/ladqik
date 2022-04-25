<template>
  <div>
    <section class="position-relative">
      <div class="position-absolute w-100 fixed-top fixed-bottom">
        <div class="col col-md-8 col-lg-6 h-100 p-0 pl-md-5">
          <div
            class="
              slider-content
              d-flex
              flex-column
              pl-5
              h-100
              justify-content-center
            "
            style="color: #000; background-color: rgb(255 255 255 / 70%)"
          >
            <h2 class="font-weight-bold">Covid Lab Reimagined.</h2>
            <p
              v-for="item in headItems"
              :key="item"
              class="d-flex align-items-center"
            >
              <Icon icon="arrow-right" class="mr-2 icon-head" />{{ item }}
            </p>
          </div>
        </div>
      </div>
      <parallax
        :speedFactor="0.5"
        direction="down"
        breakpoint="(min-width: 1200px)"
      >
        <img
          src="https://poseidondiagnostics.com/images/main1.jpg"
          alt="very cool bg"
        />
      </parallax>
    </section>

    <section>
      <div class="row py-5 mx-5 d-flex justify-content-center">
        <div
          v-for="item in items"
          :key="item.name"
          class="col d-flex col-md-6 col-lg-4"
        >
          <Icon :icon="item.icon" class="gradient xl mr-4" />
          <div class="d-flex flex-column">
            <span class="font-weight-bold mb-2">{{ item.name }}</span>
            <p class="w-100 w-md-80 item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <hr class="m-0 p-0" />

    <section>
      <div
        class="
          row
          align-items-center
          justify-content-center
          mx-auto
          big-section
        "
        style="max-width: 1170px"
      >
        <div
          class="
            col-12 col-xl-6 col-lg-5 col-md-10
            mb-0 mb-md-5
            overflow-hidden
          "
        >
          <img
            class="w-100"
            src="https://poseidondiagnostics.com/images/home-dentist-img-01.jpeg"
            alt="dentist"
          />
        </div>
        <div
          class="
            col-10 col-xl-5 col-lg-6
            offset-lg-1
            text-center text-lg-left
            d-flex
            flex-column
            align-items-center align-items-lg-start
          "
        >
          <h3 class="mb-5">
            The first Covid-19 laboratory designed for the
            <span class="font-weight-normal"> modern testing center </span>
          </h3>
          <p class="mb-5">
            We are the only laboratory focused on Covid-19 Rt-Pcr testing that
            is open 7 days a week, with daily couriers across Florida offering
            same day results. We only utulize FDA Approved test kits that is
            acceptable for <strong>all international</strong>
            travel. Reports include all required information
            <strong>including QR code's</strong>
          </p>
          <NuxtLink
            to="#"
            class="
              nav-link
              d-flex
              justify-content-between
              align-items-center
              text-uppercase
              contact-btn
            "
            >Contact us
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="d-flex justify-content-center big-section">
      <div
        class="
          col-12 col-xl-7 col-lg-8 col-md-10
          text-center
          d-flex
          flex-column
          align-items-center
        "
      >
        <span class="mb-4">CLIA Certified & FDA Approved</span>
        <h2 class="mb-5">Open Everyday, Same Day Results!</h2>
        <nuxt-link
          no-prefetch
          to="#"
          class="d-none d-md-flex text-decoration-none"
        >
          <button
            type="button"
            class="btn yellow-gradient slim p-2 text-uppercase px-5 py-3"
          >
            Contact us
          </button>
        </nuxt-link>
      </div>
    </section>

    <section
      class="d-flex justify-content-center py-5 b-grey"
      style="padding-top: 80px"
    >
      <div class="w-75 justify-content-start">
        <div
          class="col col-md-3 col-xl-3 d-flex flex-column align-items-center"
        >
          <Icon icon="location" class="lg mb-4 gradient" />
          <p
            class="font-weight-bold text-center"
            style="font-weight: 500 !important"
          >
            Aventura HQ Laboratory
          </p>
          <p class="mx-2 text-center">
            2065 NE 163RD STREET, AVENTURA, FL 33162
          </p>
        </div>
      </div>
    </section>

    <hr class="m-0 p-0" />
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
import Icon from "@/components/icons";

export default {
  layout: "lab-services",
  components: { Icon, Parallax },
  data: () => ({
    items: [
      {
        name: "Fast Guaranteed Results",
        description:
          "Patients receive their results fast and secure via email in their inbox.",
        icon: "timer",
      },
      {
        name: "Travel Internationally",
        description:
          "We are a CLIA Certified lab, and only use FDA/EUA test kits approved for all international travel.",
        icon: "plane",
      },
      {
        name: "Easy And Convenient",
        description:
          "We are open 7 days a week and offer convenient collection points across Florida for same day results.",
        icon: "handshake",
      },
    ],
    headItems: [
      "FDA / EUA Approved Test Kits",
      "Rt-Pcr Results In Less Than 4Hrs.",
      "CLIA Certified Laboratory",
      "Open 7 Days A Week.",
    ],
  }),
};
</script>

<style scoped>
img {
  border-radius: 10px;
}

.big-section {
  padding: 160px 0;
}

.item-description {
  color: #828282;
}

.icon.icon-head {
  display: block;
  border: 2px solid #0038e3;
  border-radius: 50%;
  fill: #0038e3;
}

.icon.gradient {
  fill: url(#lgrad);
}

.icon.xl {
  width: 6rem;
  height: 3rem;
}
</style>