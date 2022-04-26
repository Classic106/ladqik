<template>
  <section class="d-flex flex-column flex-lg-row">
    <div class="col login-bg position-relative">
      <img
        src="https://poseidon.elisedge.com/elis/portal/images/logo.png"
        alt="logo"
        class="logo"
      />
    </div>
    <div
      class="
        col-12 col-lg
        mt-4
        px-4 px-lg-3
        d-flex
        flex-column
        justify-content-between
      "
    >
      <div class="col d-flex flex-column justify-content-center mb-5">
        <h1>ELIS - Login</h1>
        <form v-if="formIndex === 0" v-on:submit.prevent="submitLogin">
          <p>Enter your username and password.</p>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="userName"
              placeholder="User name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <span v-on:click="formIndex = 1" class="mr-3"
              >Forgot Password?</span
            >
            <button type="submit" class="btn btn-primary">Sing in</button>
          </div>
        </form>

        <form v-if="formIndex === 1" v-on:submit.prevent="submitForgotPassword">
          <h3 class="font-green">Forgot Password ?</h3>
          <p>
            Enter your username and e-mail address below to reset your password.
            If you don't know what your username is it is probably just email
            address.
          </p>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="userName"
              placeholder="User name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column" v-on:click.stop="formIndex = 0">
              <span class="mb-2">I don't have a email</span>
              <button class="btn btn-outline-success">Back</button>
            </div>
            <div class="d-flex flex-column">
              <span v-on:click="formIndex = 2" class="mb-2"
                >Forgot Username?</span
              >
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>

        <form v-if="formIndex === 2" v-on:submit.prevent="submitForgotUserName">
          <h3 class="font-green">Forgot Username ?</h3>
          <p>Enter your e-mail address below to get your username.</p>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="d-flex justify-content-between">
            <button
              v-on:click.prevent="formIndex = 1"
              class="btn btn-outline-success"
            >
              Back
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      <div class="row d-flex justify-content-end">
        <div
          class="
            col
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          Copyright © ELIS/LIMS
          <ul class="row p-0 m-0 align-items-center justify-content-center">
            <li class="col-12 col-md-4 col-lg">
              <span
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  text-nowrap
                "
              >
                - Lab Phone Number:
                <a href="tel:844-425-2272">844-425-2272</a>
              </span>
            </li>
            <li class="col-12 col-md-4 col-lg">
              <span
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  text-nowrap
                "
              >
                - Lab Email:
                <a href="mailto:cs@poseidondiagnostics.com"
                  >cs@poseidondiagnostics.com</a
                >
              </span>
            </li>
            <li class="col-12 col-md-4 col-lg">
              <span class="d-flex text-nowrap justify-content-center">
                -
                <a
                  href="https://www.elislims.com/termsofservice.html"
                  class="ml-1"
                  >Terms of Service</a
                >
              </span>
            </li>
            <li class="col-12 col-md-4 col-lg">
              <span class="d-flex text-nowrap justify-content-center">
                -
                <a
                  href="https://www.elislims.com/privacypolicy.html"
                  class="ml-1"
                  >Privacy Policy</a
                >
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "default-login",
  data: () => ({ formIndex: 0 }),
  methods: {
    submitLogin(e) {
      const formData = new FormData(e.target);
      const userName = formData.get("userName");
      const password = formData.get("password");

      console.log({ userName, password }, "submitLogin");
    },
    submitForgotPassword(e) {
      const formData = new FormData(e.target);
      const userName = formData.get("userName");
      const email = formData.get("email");

      console.log({ userName, email }, "submitForgotPassword");
    },
    submitForgotUserName(e) {
      const formData = new FormData(e.target);
      const email = formData.get("email");

      console.log({ email }, "submitForgotUserName");
    },
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .login-bg {
    min-height: 100vh !important;
  }
}

ul {
  list-style: none;
  font-size: 10px;
}

h1 {
  font-size: 30px;
  font-weight: 300;
  color: #4e5a64;
}

h3 {
  font-size: 24px;
}

.login-bg {
  background-image: url("https://poseidon.elisedge.com/elis/portal/images/login-bg.jpg");
  min-height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.logo {
  position: absolute;
  top: 2.5em;
  left: 2.5em;
  max-width: 80%;
}

.font-green {
  color: #32c5d2 !important;
}
</style>