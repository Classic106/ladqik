<template>
  <div class="d-flex flex-column align-items-center p-3">
    <div v-if="locations.length === 0">List is Empty</div>
    <div v-else class="d-flex flex-column align-items-center">
      <h6 class="text-gradient-magenta-orange-2">
        Select A Location, Get Tested Today.
      </h6>
      <div class="row p-5">
        <div
          v-for="location in locations"
          v-bind:key="location.name"
          class="mx-auto col-12 col-md-6 col-lg-3 d-flex justify-content-center"
        >
          <div class="card m-2 flex-fill" style="max-width: 35rem">
            <img
              class="card-img-top"
              :src="location.image"
              alt="Card image cap"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ location.name }}</h5>
              <p class="card-text my-auto">
                {{ location.address }}
              </p>
              <hr />
              <a
                href="#"
                @click.prevent="openLocation(location.name)"
                class="
                  btn btn-primary
                  w-100
                  d-flex
                  justify-content-between
                  align-items-center
                  btn btn-light
                "
                >Continue <Icon icon="arrow-right"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icons";

export default {
  layout: "booking",
  components: { Icon },
  async fetch({ store }) {
    if (store.getters["locations/locations"].length === 0) {
      await store.dispatch("locations/fetch");
    }
  },
  computed: {
    locations() {
      return this.$store.getters["locations/locations"];
    },
  },
  methods: {
    openLocation(name) {
      this.$router.push("/booking/" + name);
    },
  },
};
</script>

<style scoped>
.icon {
  fill: #000;
}
</style>