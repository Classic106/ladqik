<template>
  <div>
    <div class="row slider">
      <div class="col d-flex bg-transparent w-100 h-100 py-1 p-md-5">
        <div
          class="
            slider-content
            d-flex
            flex-column
            col col-md-12 col-xl-5
            p-0 p-md-5
            m-5
          "
        >
          <h6>NO LINES, NO HASSLES, FAST RESULTS.</h6>
          <h2>LAB TESTS DONE EASY.</h2>
          <p class="d-flex align-items-center">
            <Icon icon="doctor" class="mr-2" />General Health Testing.
          </p>
          <p><Icon icon="doctor" class="mr-2" />STD Testing.</p>
          <p><Icon icon="doctor" class="mr-2" />Drugs & Alcohol Testing.</p>
          <p>
            <Icon icon="doctor" class="mr-2" />CLIA Certified & CAP Accredited.
          </p>
          <nuxt-link no-prefetch to="/booking">
            <button
              type="button"
              class="btn btn-big yellow-gradient slim rounded"
            >
              Schedule Appointment
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="row m-bottom">
      <div class="col-12">
        <h2 class="pad-20 d-flex justify-content-center text-center">
          Fastest Testing Service!
        </h2>
      </div>
    </div>

    <div class="container m-bottom row mx-auto">
      <div
        class="test-item col-md-6 col-lg-3"
        v-for="item in items"
        v-bind:key="item.name"
      >
        <div class="d-flex align-items-center flex-column">
          <span class="line"></span>
          <div class="square d-flex align-items-center justify-content-center">
            {{ item.number }}
          </div>
          <div class="d-flex flex-column align-items-center">
            <span class="m-bottom-half font-weight-bold">{{ item.name }}</span>
            <p class="s-15 text-center">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-bottom">
      <div class="col-12 d-flex">
        <hr />
      </div>
    </div>

    <div class="container m-bottom">
      <div class="row flex-column flex-md-row align-items-center">
        <div class="col col-md-7 d-flex h-max mb-5 m-md-0">
          <img class="w100" src="../static/images/pic-1.jpg" />
        </div>
        <div class="col col-md-5 d-flex flex-column">
          <h6 class="color-orange m-bottom-half">
            FAST SERVICE, ACCURATE RESULTS.
          </h6>
          <h4 class="m-bottom-half">
            No Insurance, High Deductible? No Problem!
          </h4>
          <p class="m-bottom-half">
            By simplifying lab tests and making them accessible for everyone to
            monitor and maintain a healthy lifestyle. Whether you need a
            Covid-19 test for your workplace or travels, or want to do health
            testing to discover your current health status, we've got you
            covered.
          </p>
          <nuxt-link no-prefetch to="/booking">
            <button
              type="button"
              class="btn btn-secondary yellow-gradient w-100"
            >
              FIND OUT MORE
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="row m-bottom">
      <div class="col-12 d-flex">
        <hr />
      </div>
    </div>

    <div class="container m-bottom">
      <div class="row flex-column flex-md-row align-items-center">
        <div class="col col-md-7 d-flex flex-column">
          <h6 class="color-orange m-bottom-half">TESTING = INFORMATION</h6>
          <h4 class="m-bottom-half">
            We believe information is only as strong as our answers. We never
            stop asking questions for your health
          </h4>
          <nuxt-link no-prefetch to="/booking">
            <button
              type="button"
              class="btn btn-secondary yellow-gradient w-100"
            >
              VIEW ALL TESTING LOCATIONS
            </button>
          </nuxt-link>
        </div>
        <div class="col col-md-5 d-flex h-max mt-5 m-mt-0">
          <img class="w100" src="../static/images/pic-2.jpg" />
        </div>
      </div>
    </div>

    <div class="row m-bottom">
      <div class="col-12 d-flex">
        <hr />
      </div>
    </div>

    <div class="container m-bottom" id="contact">
      <div class="row">
        <div class="col-12">
          <h2 class="m-bottom">Contact Us</h2>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputLname"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Email Your Email Address..."
              />
            </div>
            <div class="form-group">
              <label for="inputSubject">Subject</label>
              <input
                type="text"
                class="form-control"
                id="inputSubject"
                placeholder="Enter a Subject..."
              />
            </div>
            <div class="form-group">
              <label for="inputMessage">Message</label>
              <textarea
                class="form-control"
                id="inputMessage"
                placeholder="Enter Your Message..."
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icons";

export default {
  components: { Icon },
  data: () => ({
    items: [
      {
        number: 1,
        name: "FIND YOUR LOCATION",
        description:
          "Find your nearest Fast Test Now clinic in your neighborhood. All our tests are FDA approved.",
      },
      {
        number: 2,
        name: "SELECT DATE & TIME SLOT",
        description:
          "Reserve a time and date that is most convenient to you. All our result times are guaranteed with your appointment.",
      },
      {
        number: 3,
        name: "CHECK-IN AT LOCATION",
        description:
          " Please bring a form of identification to verify your test and check you into our system.",
      },
      {
        number: 4,
        name: "RECEIVE YOUR RESULTS",
        description:
          "All results will be sent to you via secure email to view in our portal.",
      },
    ],
  }),
};
</script>

<style scoped>
.icon {
  fill: #fff;
}

.row.slider {
  background: #f8f8f8 url(../static/images/header-pic.jpg);
  background-size: cover;
  align-items: center;
}

.slider-content > p {
  color: #fff;
}

.square {
  z-index: 0;
}

.test-item:hover .square {
  transform: scale(1.1);
}

h5 {
  color: #374162;
  letter-spacing: -0.5px;
}

.line {
  display: block;
  width: calc(100% + 30px);
  height: 2px;
  position: absolute;
  content: "";
  top: 38px;
  left: -15px;
  background: var(--secondary);
}

span {
  color: #374162;
}

p {
  color: #828282;
}
</style>