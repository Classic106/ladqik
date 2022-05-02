<template>
  <div class="col d-flex flex-column align-items-center pt-5">
    <h6 class="font-weight-bold">Enter Details</h6>
    <form v-on:sybmit.prevent="submit" class="form-container">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          :class="!valid.name ? 'error' : ''"
          id="name"
          required
          v-model.trim="name"
        />
        <div class="validError w-100 rounded my-2 px-3" v-if="!valid.name">
          Name must be more 3 and less 15 characters
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          :class="!valid.email ? 'error' : ''"
          id="email"
          required
          v-model.trim="email"
        />
        <div class="validError w-100 rounded my-2 px-3" v-if="!valid.email">
          Email isn`t valid
        </div>
      </div>
      <button
        type="button"
        class="btn btn-outline-primary guestButton"
        :class="isGuestOpen && 'd-none'"
        v-on:click="isGuestOpen = !isGuestOpen"
      >
        Add Guests
      </button>
      <div class="form-group" v-if="isGuestOpen">
        <label for="guestEmail">Guest Emails</label>
        <input
          type="text"
          class="form-control"
          :class="!valid.guestEmail && guestEmail !== '' ? 'error' : ''"
          id="guestEmail"
          v-model.trim="guestEmail"
          v-on:keydown.enter.stop.prevent="addGuestEmail"
        />
        <div
          class="validError w-100 rounded my-2 px-3"
          v-if="!valid.guestEmail && guestEmail !== ''"
        >
          Email isn`t valid
        </div>
        <div class="mt-3">
          <div
            v-for="(guest, index) in guestsEmails"
            :key="guest"
            class="guestEmail rounded"
          >
            <span class="px-2 py-1 m-0">{{ guest }}</span>
            <span class="p-1 mr-1" v-on:click="deleteGuestEmail(index)"
              >&#10005;</span
            >
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <vue-tel-input
          v-model="phone"
          v-bind="vueTelInputProps()"
        ></vue-tel-input>
      </div>
      <div class="form-group">
        <label for="share"
          >Please share anything that will help prepare for our meeting.</label
        >
        <textarea
          type="text"
          class="form-control"
          :class="!valid.share && share !== '' ? 'error' : ''"
          id="share"
          v-model.trim="share"
        />
        <div
          class="validError w-100 rounded my-2 px-3"
          v-if="!valid.share && share !== ''"
        >
          Field contains wrong characters
        </div>
      </div>
      <div class="form-group">
        <label for="phone">Send text messages to</label>
        <vue-tel-input
          v-model="sendToPhone"
          v-bind="vueTelInputProps(false)"
        ></vue-tel-input>
      </div>
      <button type="submit" class="btn btn-primary mb-5">Schedule Event</button>
    </form>
  </div>
</template>

<script>
import { ItemValidation } from "@/helpers";

export default {
  name: "lab_servise_second_step",
  data: () => ({
    name: "",
    email: "",
    share: "",
    phone: "",
    sendToPhone: "",
    isGuestOpen: false,
    guestsEmails: [],
    guestEmail: "",
    valid: { name: true, email: true, share: true, guestEmail: true },
  }),
  watch: {
    name() {
      const validValue = ItemValidation.string(this.name);
      const validLength = this.name.length > 3 && this.name.length < 15;
      this.valid.name = validValue && validLength;
    },
    email() {
      const validValue = ItemValidation.email(this.email);
      this.valid.email = validValue;
    },
    share() {
      const validValue = ItemValidation.string(this.share);
      this.valid.share = validValue;
    },
    guestEmail() {
      const validValue = ItemValidation.email(this.guestEmail);
      this.valid.guestEmail = validValue;
    },
  },
  methods: {
    vueTelInputProps: (required = true) => ({
      mode: "international",
      validCharactersOnly: true,
      inputOptions: {
        placeholder: "Enter a phone numberrrr",
        required,
      },
    }),
    addGuestEmail() {
      this.guestsEmails.push(this.guestEmail);
      this.guestEmail = "";
    },
    deleteGuestEmail(index) {
      this.guestsEmails.splice(index, 1);
    },
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },
    submit() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };

      if (this.guestsEmails.length) {
        data.guestsEmails = this.guestsEmails;
      }

      if (this.sendToPhone) {
        data.sendToPhone = this.sendToPhone;
      }
      console.log(data);
    },
  },
};
</script>

<style scoped>
h6 {
  font-size: 20px !important;
  color: #000;
}

.form-container {
  color: #000;
}

.guestButton {
  border-radius: 40px;
}

.validError,
.guestEmail {
  width: max-content;
  background-color: #c84545;
  border-color: transparent;
  color: #fff;
}

.error {
  border: 1px solid rgba(179, 31, 31, 0.8);
}

.error:focus {
  box-shadow: 0 0 0 1px rgb(179 31 31 / 80%);
}
</style>