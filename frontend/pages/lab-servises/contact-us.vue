<template>
  <div>
    <section>
      <div class="p-5 row bg-gradient-light-orange-light-pink align-items-end">
        <div
          class="
            extra-small-screen
            w-100
            d-flex
            m-5
            flex-column flex-md-row
            align-items-end
          "
        >
          <div class="col">
            <h1 class="position-relative">
              <span class="page-title-separator-line"></span>Contact us
            </h1>
          </div>
          <div class="col">
            <h4>A Covid-19 Lab Designed Around You.</h4>
          </div>
        </div>
      </div>
    </section>
    <section class="big-section">
      <div class="row justify-content-center">
        <div class="col-10 col-md-5 content p-5">
          <h6>Speak with us</h6>
          <p class="my-3">
            Schedule a 15 minute intro call with us. We'll answer all your
            questions.
          </p>
          <a
            href="/lab-servises/select-date"
            class="
              link
              text-uppercase
              font-weight-normal
              text-small
              position-relative
            "
          >
            Schedule a call
          </a>
        </div>
      </div>
    </section>
    <section class="row justify-content-center py-5">
      <div
        class="
          col
          d-flex
          col-md-4 col-lg-3
          justify-content-center
          align-items-center
          contact-item
        "
      >
        <Icon icon="headphones" class="mr-2" />
        <a href="tel:+496170961709" class="text-nowrap">+1 844.425.2272</a>
      </div>
      <div
        class="
          col
          d-flex
          col-md-4 col-lg-3
          justify-content-center
          align-items-center
          contact-item
        "
      >
        <Icon icon="envelope" class="mr-2" />
        <a href="mailto:cs@poseidondiagnostics.com" class="text-nowrap"
          >cs@poseidondiagnostics.com</a
        >
      </div>
      <div
        class="
          col
          d-flex
          col-md-4 col-lg-3
          justify-content-center
          align-items-center
          contact-item
        "
      >
        <Icon icon="globe" class="mr-2" />
        <a href="#" class="text-nowrap">PoseidonDiagnostics.com</a>
      </div>
    </section>
  </div>
</template>

<script>
import Icon from "@/components/icons";

export default {
  layout: "lab-services",
  components: { Icon },
};
</script>

<style scoped>
@media (min-width: 767px) {
  h1 {
    padding-left: 90px;
  }

  .page-title-separator-line {
    width: 70px;
  }
}

h1,
h6 {
  padding: 0;
  letter-spacing: -0.5px;
  font-weight: inherit;
  font-size: 16px;
  line-height: 20px;
  padding-left: 55px;
}

h6 {
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
}

.contact-item:hover > a {
  color: #0038e3;
}

span {
  width: 80%;
}

p {
  font-weight: 400;
}

.icon {
  fill: url(#magenta-orange-gradient);
}

.page-title-separator-line {
  height: 1px;
  position: absolute;
  top: 9px;
  background-color: #000;
  left: 0;
  width: 40px;
}

.content {
  background-color: #f7f7f7;
  background-image: url("https://poseidondiagnostics.com/images/quotes-01.png");
  background-position: right top;
  background-repeat: no-repeat;
}

.link {
  color: #000;
}

.link::before {
  content: "";
  border-bottom: 1px solid;
  left: 0;
  position: absolute;
  top: 100%;
  width: 100%;
}
</style>