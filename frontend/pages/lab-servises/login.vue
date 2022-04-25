<template>
  <div class="main d-flex justify-content-center align-items-center">
    <form
      class="
        container
        d-flex
        flex-column
        align-items-center
        col col-md-8 col-lg-6 col-xl-4
        p-5
      "
      v-on:submit.prevent="submit"
    >
      <div class="col-12 col-xl-6 col-lg-5 col-md-10 mb-3 overflow-hidden w-50">
        <img
          src="https://poseidondiagnostics.com/logo2.png"
          class="w-100"
          alt="logo"
        />
      </div>
      <div class="form-group w-100">
        <input
          v-model="email"
          placeholder="Verify your email address"
          class="w-100 px-3"
        />
        <p class="form-text text-danger" :class="isInvalidEmail || 'd-none'">
          The selected email is invalid.
        </p>
      </div>
      <button type="submit" class="w-100 p-3 font-weight-bold">
        Send One Time Password
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    isInvalidEmail: false,
    email: "",
  }),
  methods: {
    submit() {
      console.log(this.email);
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 1.25rem;
  background: #fff;
  border: 1px solid #f0f1f5;
  color: #b1b1b1;
  height: 56px;
}
button {
  color: #fff;
  background-color: #fe634e;
  border: none;
  border-radius: 1.25rem;
}
button:hover {
  background-color: #fe4128;
  border-color: #fe361b;
}
.main {
  width: 100%;
  height: 100vh;
}
.container {
  background-color: #f4f6fa;
  box-shadow: 0 0 35px 0 rgb(154 161 171 / 15%);
  border-radius: 5px;
}
</style>