<template>
  <div class="d-flex justify-content-center">
    <vue-meeting-selector
      class="simple-example__meeting-selector"
      v-model="meeting"
      :date="date"
      :loading="loading"
      :class-names="classNames"
      :meetings-days="meetingsDays"
      @meeting-slot-selected="slotSelected"
      @next-date="nextDate"
      @previous-date="previousDate"
    />
  </div>
</template>

<script>
// Function used to generate slots, use your own function
import slotsGenerator from "@/helpers/slotsGenerator";

export default {
  data() {
    return {
      date: new Date(),
      meetingsDays: [],
      meeting: null,
      loading: true,
      nbDaysToDisplay: 5,
      start: {
        hours: 8,
        minutes: 0,
      },
      end: {
        hours: 17,
        minutes: 55,
      },
    };
  },
  computed: {
    classNames() {
      // because of line-height, font-type you might need to change top value
      return {
        tabLoading: "loading-div",
      };
    },
  },
  methods: {
    slotSelected() {
      if (this.meeting && this.meeting.date) {
        this.$store.commit(
          "appointmentForm/setAppointmentDate",
          this.meeting.date
        );
      }
    },
    async nextDate() {
      const date = new Date(this.date);
      const newDate = new Date(date.setDate(date.getDate() + 7));
      this.date = newDate;
      this.meetingsDays = await slotsGenerator(
        newDate,
        5,
        this.start,
        this.end,
        5
      );
      this.loading = false;
    },
    async previousDate() {
      this.loading = true;
      // logic to get previous date, don't display date older than today
      const date = new Date(this.date);
      date.setDate(date.getDate() - 7);
      const formatingDate = (dateToFormat) => {
        const d = new Date(dateToFormat);
        const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
        const month =
          d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
        const year = d.getFullYear();
        return `${year}-${month}-${day}`;
      };
      const newDate =
        formatingDate(new Date()) >= formatingDate(date)
          ? new Date()
          : new Date(date);
      this.date = newDate;
      this.meetingsDays = await slotsGenerator(
        newDate,
        this.nbDaysToDisplay,
        this.start,
        this.end,
        5
      );
      this.loading = false;
    },
  },
  async created() {
    this.meetingsDays = await slotsGenerator(
      this.date,
      this.nbDaysToDisplay,
      this.start,
      this.end,
      5
    );
    this.loading = false;
  },
};
</script>

<style scoped lang="scss">
.simple-example {
  &__meeting-selector {
    min-width: 640px;
  }
}
// since our scss is scoped we need to use ::v-deep
::v-deep .loading-div {
  top: 58px !important;
}
</style>