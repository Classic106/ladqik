<template>
  <div class="flex justify-center bg-gray-200">
    <div
      v-if="loading"
      class="loading w-100 d-flex justify-content-center align-items-center"
    >
      <Loader />
    </div>
    <div v-else class="max-w-screen-lg flex flex-col min-h-screen w-full">
      <BookingHeader />
      <Nuxt class="flex-grow" />
      <BookingFooter />
    </div>
  </div>
</template>

<script>
import BookingHeader from "@/components/BookingHeader";
import BookingFooter from "@/components/BookingFooter";
import Buttons from "@/components/Buttons";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    BookingHeader,
    BookingFooter,
    Buttons,
    Loader,
  },
  data: () => ({ loading: true }),
  mounted() {
    this.loading = false;
  },
};
</script>

<style scoped>
</style>

