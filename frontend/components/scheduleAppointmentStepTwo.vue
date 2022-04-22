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
        >2</span
      >
      Your Information
    </div>
    <div v-if="isOpen">
      <div class="container m-bottom">
        <div class="row">
          <div class="col-12">
            <form class="py-2" v-on:submit.prevent="submitForm">
              <div class="form-group">
                <label for="inputFirstName"
                  >First Name <span class="required">* (required)</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputFirstName"
                  v-model="form.first_name"
                  required
                  placeholder="Enter Your First Name"
                />
              </div>
              <div class="form-group">
                <label for="inputMiddleName">Middle Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputMiddleName"
                  v-model="form.middle_name"
                  placeholder="Enter Your Middle Name"
                />
              </div>
              <div class="form-group">
                <label for="inputLastname"
                  >Last Name <span class="required">* (required)</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputLastname"
                  v-model="form.last_name"
                  required
                  placeholder="Enter Your Last Name"
                />
              </div>

              <div class="form-group">
                <label for="inputCellPhone">Cell Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputCellPhone"
                  v-model="form.cell_phone"
                  placeholder="Enter Your Cell Phone..."
                />
              </div>
              <div class="form-group">
                <label for="inputHomePhone">Home Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputHomePhone"
                  v-model="form.home_phone"
                  placeholder="Enter Your Home Phone..."
                />
              </div>
              <div class="form-group">
                <label for="inputEmail"
                  >Email Address
                  <span class="required">* (required)</span></label
                >
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  size="30"
                  v-model="form.email"
                  required
                  placeholder="Enter Your Email Address..."
                />
              </div>
              <h6>Patient Intake Form</h6>
              <p>
                Please make sure that this information is entered correctly.
                This information needs to match your government passport or ID.
              </p>
              <div class="form-group">
                <label for="selectGender"
                  >Gender <span class="required">* (required)</span></label
                >
                <select
                  name="select"
                  class="form-control"
                  id="selectGender"
                  required
                  v-model="form.gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="form-group">
                <label for="inputDob"
                  >Date of Birth (MM/DD/YYYY) - WARNING: USE CORRECT FORMAT
                  <span class="required">* (required)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputDob"
                  required
                  v-model="form.dob"
                  placeholder="Enter Your Date of Birth..."
                />
              </div>
              <div class="form-group">
                <label for="inputStreet">Street </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputStreet"
                  v-model="form.street1"
                  placeholder="Enter Your Street..."
                />
              </div>
              <div class="form-group">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  v-model="form.city"
                  placeholder="Enter City..."
                />
              </div>
              <div class="form-group">
                <label for="inputZipCode">Zip Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZipCode"
                  v-model="form.zip_code"
                  placeholder="Enter Your zip code..."
                />
              </div>
              <div class="form-group">
                <label for="selectEthnicity"
                  >What is your ethnicity?
                  <span class="required">* (required)</span></label
                >
                <select
                  name="select"
                  class="form-control"
                  id="selectEthnicity"
                  required
                  v-model="form.ethnicity"
                >
                  <option value="Hispanic_or_Latino">Hispanic or Latino</option>
                  <option value="American_Indian_or_Alaska_Native">
                    American Indian or Alaska Native
                  </option>
                  <option value="Black_or_African_American">
                    Black or African American
                  </option>
                  <option value="Native_Hawaiian_or_Other_Pacific_Islander">
                    Native Hawaiian or Other Pacific Islander
                  </option>
                  <option value="White">White</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <h6>Informed Consent</h6>
                <div class="form-group">
                  <label for="selectEthnicity"
                    >I have read and agree to Fast Test Now Health’s Policies,
                    Assignment of Benefits, HIPAA Notice of Privacy Practices,
                    Informed Consent, Terms & Conditions & Privacy
                    Policy.</label
                  >
                  <div class="form-group">
                    <label class="chexbox">
                      <input
                        type="checkbox"
                        class="form-control"
                        v-bind:value="agreeAbove"
                        v-on:click.stop="agreeAbove = !agreeAbove"
                      />I have read and agree to the above
                      <span class="required">* (required)</span></label
                    >
                  </div>
                  <div class="form-group">
                    <label class="chexbox">
                      <input
                        type="checkbox"
                        class="form-control"
                        v-bind:value="agreeContactedFastTestNow"
                        v-on:click.stop="
                          agreeContactedFastTestNow = !agreeContactedFastTestNow
                        "
                      />I agree to be contacted by FastTestNow for transactional
                      emails details regarding my appointment, test results and
                      supporting content.
                      <span class="required">* (required)</span></label
                    >
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                :disabled="disabledButton"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    name() {
      return this.$route.params.name;
    },
    isOpen() {
      const appoinment = this.$store.getters["appointmentForm/getAppointment"];
      const appointmentDate =
        this.$store.getters["appointmentForm/getAppointmentDate"];

      return appoinment && appointmentDate;
    },
    disabledButton() {
      return !this.agreeAbove || !this.agreeContactedFastTestNow;
    },
  },
  data: () => ({
    agreeAbove: false,
    agreeContactedFastTestNow: false,
    form: {
      first_name: "",
      middle_name: "",
      last_name: "",
      home_phone: "",
      cell_phone: "",
      email: "",
      street1: "",
      gender: "",
      dob: "",
      country: "",
      city: "",
      state: "",
      language: "",
      ethnicity: "",
      zip_code: "",
    },
  }),
  methods: {
    submitForm() {
      this.toggle(this.form);
    },
    ...mapMutations({
      toggle: "appointmentForm/setUserData",
    }),
  },
};
</script>

<style scoped>
.chexbox {
  display: flex;
  align-items: center;
}
.chexbox > input {
  width: min-content;
  margin-right: 10px;
}
.required {
  color: red;
}
</style>