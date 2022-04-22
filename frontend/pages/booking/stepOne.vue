<template>
  <div class="d-flex flex-column p-4 bg-light border">
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
    <div v-if="appointments.length === 0" class="d-flex justify-content-center">
      Doesn`t have any appointments
    </div>
    <div
      v-else
      v-for="appointment in appointments"
      v-bind:key="appointment.name"
      class="appointment mx-auto border w-100 p-4 my-1"
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
  </div>
</template>

<script>
export default {
  layout: "empty",
  props: ["name"],
  data: () => ({
    name: "",
  }),
  async fetch({ store }) {
    if (store.getters["locations/locations"].length === 0) {
      await store.dispatch("locations/fetch");
    }
  },
  computed: {
    appointments() {
      const result = this.$store.getters["locations/locations"].filter(
        (loc) => loc.name === this.name
      )[0];

      if (result && result.appointments) {
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
  created() {
    const { name } = this.$route.params;
    this.name = name;
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

.appointment:hover {
  background: #fff;
  border-color: #ccc;
}
</style>