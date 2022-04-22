<template>
  <div>
    <div class="d-flex flex-column p-4 bg-light border mb-4">
      <div class="d-flex align-items-center">
        <span
          class="
            step-number
            d-flex
            justify-content-center
            align-items-center
            rounded-circle
            mr-2
          "
          >1</span
        >
        Choose Appointment
      </div>
      <span class="py-2">{{ name }}</span>
      <div
        v-if="appointments.length === 0"
        class="d-flex justify-content-center"
      >
        Doesn`t have any appointments
      </div>
      <div>
        <div
          v-for="appointment in appointments"
          v-bind:key="appointment.name"
          v-on:click="setAppointment(appointment.id)"
          class="appointment mx-auto border w-100 p-4 my-1"
          :class="appointmentId === appointment.id ? 'active' : ''"
        >
          <h6>{{ appointment.name }}</h6>
          <span>${{ appointment.price }}</span>
          <div
            v-for="description in appointment.description.split(',')"
            v-bind:key="description"
            class="mx-auto"
          >
            ~ {{ description }}
          </div>
        </div>
        <span
          v-if="appointmentId && appointments.length > 1"
          v-on:click="isHide = !isHide"
          class="
            d-flex
            justify-content-end
            align-items-center align-self-end
            me-2
            mb-2
            mt-2
            fs-6
          "
          >{{ isHide ? "view all" : "hide" }}</span
        >
        <div v-if="appointmentId && appointments.length > 0"><TestDates /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TestDates from "../components/TestDates.vue";

export default {
  module: {
    TestDates,
  },
  destroyed() {
    this.clearStore();
  },
  data: () => ({
    isHide: true,
  }),
  methods: {
    setAppointment(id) {
      this.setAppointmentToStore(id);
      this.isHide = true;
    },
    ...mapMutations({
      setAppointmentToStore: "appointmentForm/setAppointment",
      clearStore: "appointmentForm/clearAll",
    }),
  },
  computed: {
    appointmentId() {
      return this.$store.getters["appointmentForm/getAppointment"];
    },
    name() {
      return this.$route.params.name;
    },
    appointments() {
      const result = this.$store.getters["locations/locations"].filter(
        (loc) => loc.name === this.name
      )[0];

      if (result && result.appointments) {
        if (this.isHide && this.appointmentId) {
          return [...result.appointments].filter(
            (a) => a.id === this.appointmentId
          );
        }

        return [...result.appointments].sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
      }
      return [];
    },
  },
};
</script>

<style scoped>
.appointment.active {
  background-color: rgba(249, 141, 56, 1);
}

.appointment.active:hover {
  background-color: rgba(249, 103, 56, 1);
  border-color: #ccc;
}

.appointment:not(.active):hover {
  background-color: #fff;
  border-color: #ccc;
}
</style>