<template>
  <div class="row my-5 align-items-center justify-content-center">
    <div class="container row p-0 m-0" :class="date ? 'max' : ''">
      <div class="left-side col p-0 position-relative">
        <button
          v-if="step > 0"
          v-on:click="stepMinusOne"
          class="
            back-button
            d-flex
            align-items-center
            justify-content-center
            position-absolute
            mt-3
            ml-3
          "
        >
          <Icon icon="arrow-left" class="md" />
        </button>
        <div class="m-5 d-flex justify-content-center">
          <img
            src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/11958543/a09fbf74.png"
            alt="logo"
            class="logo p-0"
          />
        </div>
        <hr class="" />
        <div class="mx-4 px-1">
          <img
            src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/11958543/98d01a66.jpg"
            alt="logo"
            class="logo2 p-0 mb-2"
          />
          <div>
            <strong>Poseidon Diagnostics</strong>
            <h1>Discovery Call</h1>
            <div class="d-flex flex-column my-3">
              <span>
                <Icon icon="timer" /> <strong class="ml-2">15 min</strong></span
              >
              <span
                ><Icon icon="phone" /><strong class="ml-3"
                  >Phone call</strong
                ></span
              >
            </div>
            <p v-if="step === 0" class="mb-5 pb-5">
              We want to learn more about you! This short call gives you time to
              let us know about your needs to see if our product is right for
              you.
            </p>
            <div v-if="step === 1">
              <div>
                <Icon icon="calendar" /><strong class="ml-3">{{
                  parseDate()
                }}</strong>
              </div>
              <div>
                <Icon icon="earth-asia" /><strong class="ml-3">{{
                  timeZone
                }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FirstStep v-if="step === 0" />
      <SecondStep v-if="step === 1" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { convert_24h_to_AmPm_as_string } from "@/helpers";
import Icon from "@/components/icons";
import FirstStep from "@/components/select-date/FirstStep";
import SecondStep from "@/components/select-date/SecondStep";

export default {
  name: "select-date",
  components: { Icon, FirstStep, SecondStep },
  computed: {
    ...mapGetters({
      step: ["labServise/getStep"],
      date: ["labServise/getDate"],
      isAmPm: ["labServise/getIsAmPm"],
      timeZone: ["labServise/getTimeZone"],
    }),
  },
  methods: {
    ...mapMutations({ stepMinusOne: "labServise/stepMinusOne" }),
    parseDate() {
      const chosedDate = new Date(this.date);

      const hours = chosedDate.getHours();
      const minutes = chosedDate.getMinutes();

      const day = chosedDate.toLocaleString("en-us", { weekday: "long" });
      const month = chosedDate.toLocaleString("en-us", { month: "long" });
      const date = chosedDate.getDate();
      const year = chosedDate.getFullYear();

      const from = convert_24h_to_AmPm_as_string(hours, minutes, this.isAmPm);
      const hoursTo = minutes + 15 === 60 ? hours + 1 : hours;
      const minutesTo = minutes + 15 === 60 ? "00" : minutes + 15;
      let to = convert_24h_to_AmPm_as_string(hoursTo, minutesTo, this.isAmPm);

      if (hours === 23 && minutes === 45) {
        to = convert_24h_to_AmPm_as_string(24, "00", this.isAmPm);
      }
      return `${from}-${to} ${day}, ${month} ${date}, ${year}`;
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #000;
}

.back-button {
  width: 43px;
  height: 43px;
  background-clip: padding-box;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 50%;
}

.back-button > .icon {
  fill: rgb(0, 105, 255);
}

.container {
  max-width: 800px;
  min-height: 550px;
  width: 95%;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 8px;
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
}

.container.max {
  min-width: 900px !important;
  max-width: 1060px !important;
}

.left-side::after {
  display: block;
  position: absolute;
  top: 0%;
  bottom: 0;
  right: 0;
  content: "";
  height: 100%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}

img.logo {
  max-width: 220px;
  max-height: 120px;
}

img.logo2 {
  width: 65px;
  height: 65px;
}

.icon {
  fill: rgba(26, 26, 26, 0.6);
}
</style>