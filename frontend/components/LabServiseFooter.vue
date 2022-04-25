<template>
  <footer class="p-5 b-grey">
    <p class="text-center">
      © 2021 Poseidon Diagnostics - E: cs@poseidondiagnostics.com | T:
      844.425.2272
    </p>
    <div v-if="scrollUpButton" class="d-none d-lg-flex">
      <button
        class="button-up d-flex justify-content-center align-items-center"
        v-on:click="scrollUp"
      >
        <Icon icon="arrow-up" />
      </button>
    </div>
  </footer>
</template>

<script>
import Icon from "@/components/icons";

export default {
  components: { Icon },
  data: () => ({
    scrollUpButton: false,
  }),
  methods: {
    handleScroll() {
      this.scrollUpButton = window.scrollY > 200;
    },
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.b-grey {
  background-color: #f7f7f7;
}

.button-up {
  background: #fff;
  font-size: 17px;
  line-height: 34px;
  box-shadow: 0 0 25px rgb(23 23 23 / 25%);
  height: 34px;
  width: 34px;
  position: fixed;
  right: 45px;
  text-decoration: none;
  bottom: 45px;
  z-index: 1029;
  border-radius: 50%;
}
</style>