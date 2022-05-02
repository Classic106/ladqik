<template>
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
          <TimeZones class="mt-4"/>
        </div>
        <ChoseTime v-if="date" class="col" />
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Icon from "@/components/icons";
import ChoseTime from "./ChoseTime";
import TimeZones from "./TimeZones";

export default {
  name: "lab_servise_first_step",
  components: { Icon, ChoseTime, TimeZones },
  methods: { ...mapMutations({ setDate: "labServise/setDate" }) },
  watch: {
    date() {
      this.setDate(this.date);
    },
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
      date: null,
      minDate,
      maxDate,
      step: 0,
      attributes: [
        {
          key: "today",
          dot: true,
          dates: new Date(),
        },
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
  computed: {
    isAmPm() {
      return this.$store.getters["labServise/isAmPm"];
    },
    timeZone() {
      return this.$store.getters["labServise/timeZone"];
    },
  },
  created() {
    this.date = this.$store.getters["labServise/getDate"];
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