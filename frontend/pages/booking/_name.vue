<template>
  <div class="p-5">
    <div class="d-flex flex-column p-5 bg-light border mb-5">
      <h1 class="d-flex justify-content-center">Nobel BioLabs</h1>
      <nuxt-link
        to="/booking"
        class="btn btn-primary d-flex justify-content-center w-5 align-self-center"
        style="width: max-content"
        >Click here to view other locations</nuxt-link
      >
    </div>
    <ScheduleAppointmentStepOne />
    <ScheduleAppointmentStepTwo />
  </div>
</template>

<script>
import ScheduleAppointmentStepOne from "@/components/scheduleAppointmentStepOne.vue";
import ScheduleAppointmentStepTwo from "@/components/scheduleAppointmentStepTwo.vue";

export default {
  layout: "empty",
  module: {
    ScheduleAppointmentStepOne,
    ScheduleAppointmentStepTwo,
  },
  async fetch({ store }) {
    if (store.getters["locations/locations"].length === 0) {
      await store.dispatch("locations/fetch");
    }
  },
};
</script>

<style>
.step-number {
  background: #313131;
  color: #fff;
  width: 37.5px;
  height: 37.5px;
  text-align: center;
}
</style>