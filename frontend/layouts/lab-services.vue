<template>
  <div class="flex justify-center bg-gray-200">
    <div
      v-if="loading"
      class="loading w-100 d-flex justify-content-center align-items-center"
    >
      <Loader />
    </div>
    <div v-else class="max-w-screen-lg flex flex-col min-h-screen w-full">
      <LabServiseHeader />
      <Nuxt class="flex-grow" />
      <LabServiseFooter />
    </div>
  </div>
</template>

<script>
import LabServiseHeader from "@/components/LabServiseHeader";
import LabServiseFooter from "@/components/LabServiseFooter";
import Buttons from "@/components/Buttons";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    LabServiseHeader,
    LabServiseFooter,
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
.position-absolute {
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

.loading {
  height: 100vh;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.w100 {
  width: 100%;
}

.color-orange {
  color: rgb(249, 141, 56);
}

.s-15 {
  line-height: 1.8;
}

.m-bottom {
  margin-bottom: 60px;
}

.m-bottom-half {
  margin-bottom: 30px;
}

.m-bottom-qtr {
  margin-bottom: 15px;
}

.square {
  width: 75px;
  height: 75px;
  border: 8px solid #fecbba;
  border-radius: 75px;
  background: rgb(170, 71, 39);
  background: linear-gradient(
    90deg,
    rgba(249, 103, 56, 1) 0%,
    rgba(249, 103, 56, 1) 35%,
    rgba(249, 141, 56, 1) 100%
  );
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.row {
  margin-left: 0;
  margin-right: 0;
}

.pad-20 {
  padding: 40px 0;
}

.logo {
  padding-left: 20px;
}
.row.header {
  height: 60px;
  background-color: #f8f8f8;
  align-items: center;
}

a.nav-link {
  color: #2d384a;
}

.btn.yellow-gradient {
  background: rgb(170, 71, 39);
  background: linear-gradient(
    90deg,
    rgba(170, 71, 39, 1) 0%,
    rgba(255, 147, 112, 1) 50%,
    rgba(170, 71, 39, 1) 100%
  );
  background-size: 200% auto;
  border: 0;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1.2px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.btn.yellow-gradient:hover {
  background-position: right center;
}

.btn.btn-big {
  max-width: 300px;
  height: 50px;
  font-size: 14px !important;
}

h6 {
  font-size: 1.8rem;
  line-height: 2.5rem;
}

h5 {
  font-size: 2.3rem;
  line-height: 3rem;
}
h3 {
  font-size: 3.4rem;
  line-height: 3.9rem;
}

h2 {
  font-size: 3.9rem;
}

.text-gradient-magenta-orange-2 {
  background: linear-gradient(
    to right,
    #ec606c,
    #ee6362,
    #ee6757,
    #ed6c4d,
    #eb7242
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

