<template>
  <div class="row my-5 align-items-center justify-content-center">
    <div class="container row p-0 m-0" :class="date ? 'max' : ''">
      <div class="left-side col p-0 position-relative">
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
            <p class="mb-5 pb-5">
              We want to learn more about you! This short call gives you time to
              let us know about your needs to see if our product is right for
              you.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column align-items-center pt-5">
        <h1 class="text-start w-100 px-3">Select a Date &amp; Time</h1>
        <client-only placeholder="Loading...">
          <div class="row d-flex w-100 h-100 justify-content-center mb-5">
            <div>
              <DatePicker
                :min-date="minDate"
                :max-date="maxDate"
                :attributes="attributes"
                v-model="date"
                title-position="left"
                :first-day-of-week="2"
                class="col mt-3 mx-2"
              />
              <TimeZones v-on:dateOptions="setDateOptions" />
            </div>
            <ChoseTime
              v-if="date"
              class="col"
              :date="date"
              :isAmPm="isAmPm"
              :timeZone="timeZone"
              v-on:setDateTime="setDateTime"
            />
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icons";
import ChoseTime from "@/components/ChoseTime";
import TimeZones from "@/components/TimeZones";

export default {
  name: "select-date",
  components: { Icon, ChoseTime, TimeZones },
  methods: {
    setDateOptions(data) {
      const { isAmPm, timeZone } = data;
      this.isAmPm = isAmPm;
      this.timeZone = timeZone;
    },
    setDateTime(date){
      console.log(date, 'sssss');
    }
  },
  data: () => {
    const minDate = new Date();
    const maxDate = new Date(
      minDate.getFullYear(),
      minDate.getMonth() + 2,
      minDate.getDate()
    );

    const dates = [];
    let date = minDate;

    do {
      const d = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1
      );

      dates.push(d);
      date = d;
    } while (date < maxDate);

    return {
      isAmPm: false,
      timeZone: "",
      date: null,
      minDate,
      maxDate,
      step: 0,
      attributes: [
        {
          highlight: {
            color: "blue",
            fillMode: "light",
          },
          dates: [minDate, ...dates],
        },
      ],
    };
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

.vd-wrapper {
  display: flex;
  box-shadow: none !important;
  justify-content: center;
  width: 100%;
}

.vc-container {
  border: none;
}

.container {
  max-width: 800px;
  min-height: 550px;
  width: 95%;
  border: 1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1));
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