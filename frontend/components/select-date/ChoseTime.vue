<template>
  <div>
    <p class="mb-3">{{ dateAsString(true) }}</p>
    <div class="d-flex flex-grow-1 flex-column container p-0">
      <div v-if="times.length === 0">
        <div>
          No times available <span>{{ dateAsString() }}</span>
        </div>
        <span>Please select another date</span>
      </div>
      <ul v-else class="p-0 col overflow-auto">
        <li v-for="(time, i) in times" :key="time" class="row mb-3">
          <button
            class="btn col p-2"
            :class="index === i ? 'btn-secondary' : 'btn-outline-primary'"
            v-on:click="index = i"
          >
            {{ time }}
          </button>
          <button
            class="btn btn-primary d-none col p-2 ml-2 justify-content-center"
            :class="index === i && 'd-flex'"
            v-on:click="setTime"
          >
            Confirm
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { convert_24h_to_AmPm_as_string } from "@/helpers";

export default {
  data: () => ({
    times: [],
    index: null,
    timer: null,
    currentDate: new Date(),
  }),
  watch: {
    isAmPm() {
      this.updateTimes();
    },
    timeZone() {
      this.updateTimes();
    },
  },
  computed: {
    ...mapGetters({
      isAmPm: ["labServise/getIsAmPm"],
      timeZone: ["labServise/getTimeZone"],
      date: ["labServise/getDate"],
    }),
  },
  methods: {
    ...mapMutations({ setTimeDate: "labServise/setTimeDate" }),
    setTime() {
      const date = new Date(this.date);

      const time = this.times[this.index].replace(/am|pm/g, "").split(":");
      date.setHours(+time[0]);
      date.setMinutes(+time[1]);

      this.setTimeDate(date);
    },
    dateAsString(withDay) {
      if (this.date) {
        const day = this.date.toLocaleString("en-us", { weekday: "long" });
        const month = this.date.toLocaleString("en-us", { month: "long" });
        const date = this.date.getDate();
        if (withDay) {
          return `${day}, ${month} ${date}`;
        }
        return `${month} ${date}`;
      }
      return null;
    },
    updateTimes() {
      const times = [];
      const quarterHours = ["00", "15", "30", "45"];
      const { timeZone } = this;
      const currentDate = new Date(
        this.currentDate.toLocaleString("en-US", {
          timeZone,
        })
      );

      const currentHours = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();

      if (currentHours <= 16 && currentMinutes <= 59) {
        const hour = currentHours >= 8 ? currentHours : 8;
        let index = 0;
        for (let h = hour; h <= 16; h++) {
          if (index === 0) {
            const quarterHoursIndex = quarterHours.findIndex(
              (val) => val >= currentMinutes
            );
            const indx = quarterHoursIndex === -1 ? 0 : quarterHoursIndex;
            for (let m = indx; m < 4; m++) {
              times.push(
                convert_24h_to_AmPm_as_string(h, quarterHours[m], this.isAmPm)
              );
            }
            index++;
            continue;
          }
          for (let m = 0; m < 4; m++) {
            times.push(
              convert_24h_to_AmPm_as_string(h, quarterHours[m], this.isAmPm)
            );
          }
          index++;
        }
      }
      this.times = times;
    },
    startTimer() {
      this.timer = setInterval(
        function () {
          this.currentDate = new Date();
        }.bind(this),
        1000
      );
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
  },
  mounted() {
    this.startTimer();
  },
  created() {
    this.updateTimes();
  },
  destroyed() {
    this.stopTimer();
  },
};
</script>

<style scoped>
.container {
  height: 89%;
}
</style>