<template>
  <div class="d-flex justify-content-center align-items-center container my-5">
    <div
      class="
        confirm-main
        d-flex
        flex-column
        justify-content-center
        align-items-center
        my-5
      "
    >
      <div class="wrap-image">
        <img
          src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/11958543/98d01a66.jpg"
          alt="logo"
        />
      </div>
      <div
        class="
          text-center
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <h1>Confirmed</h1>
        <p>You are scheduled with Poseidon Diagnostics.</p>
        <div class="d-flex flex-column position-relative">
          <button
            ref="button"
            class="d-flex p-2"
            v-on:click="isCalendarOpen = !isCalendarOpen"
          >
            <span
              class="plus d-flex justify-content-center align-items-center mr-2"
              >&#43;</span
            ><span class="button-text">
              Add to your calendar
              <Icon :icon="isCalendarOpen ? 'angle-down' : 'angle-up'"
            /></span>
          </button>
          <ul
            ref="calendar"
            v-if="isCalendarOpen"
            class="
              calendar-list
              container
              position-absolute
              w-100
              text-left
              py-2
            "
          >
            <li>
              <a
                href="https://calendly.com/invitees/ca8d36c0-d262-4c48-8601-3b6b587a810f/google"
              >
                Google
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/invitees/ca8d36c0-d262-4c48-8601-3b6b587a810f/ics"
              >
                Outlook
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/invitees/ca8d36c0-d262-4c48-8601-3b6b587a810f/ics"
              >
                Other
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <div class="d-flex align-items-center">
          <div class="circle"></div>
          <h2 class="m-0 ml-2">Discovery Call</h2>
        </div>
        <div>
          <Icon icon="calendar" /><strong class="ml-3">{{
            parseDate()
          }}</strong>
        </div>
        <div>
          <Icon icon="earth-asia" /><strong class="ml-3">{{ timeZone }}</strong>
        </div>
        <div>
          <Icon icon="phone" /><strong class="ml-3">{{ phone }}</strong>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { convert_24h_to_AmPm_as_string } from "@/helpers";
import Icon from "@/components/icons";

export default {
  layout: "default",
  components: { Icon },
  data: () => ({
    isCalendarOpen: false,
  }),
  computed: {
    ...mapGetters({
      isAmPm: ["labServise/getIsAmPm"],
      timeZone: ["labServise/getTimeZone"],
      date: ["labServise/getDate"],
      phone: ["labServise/getPhone"],
    }),
  },
  methods: {
    closeOutsideMenu(e) {
      let { calendar, button } = this.$refs;
      let { target } = e;

      if (!calendar || !target) {
        return;
      }
      if (
        calendar !== target &&
        !calendar.contains(target) &&
        button !== target &&
        !button.contains(target)
      ) {
        this.isCalendarOpen = false;
      }
    },
    parseDate() {
      const chosedDate = new Date(this.date);

      const hours = chosedDate.getHours();
      const minutes = chosedDate.getMinutes();

      const day = chosedDate.toLocaleString("en-us", { weekday: "long" });
      const month = chosedDate.toLocaleString("en-us", { month: "long" });
      const date = chosedDate.getDate();
      const year = chosedDate.getFullYear();

      const from = convert_24h_to_AmPm_as_string(hours, minutes, this.isAmPm);
      const hoursTo = minutes + 15 === 60 ? hours + 1 : hours;
      const minutesTo = minutes + 15 === 60 ? "00" : minutes + 15;
      let to = convert_24h_to_AmPm_as_string(hoursTo, minutesTo, this.isAmPm);

      if (hours === 23 && minutes === 45) {
        to = convert_24h_to_AmPm_as_string(24, "00", this.isAmPm);
      }
      return `${from}-${to} ${day}, ${month} ${date}, ${year}`;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeOutsideMenu);
  },
  destroyed() {
    document.addEventListener("click", this.closeOutsideMenu);
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

button {
  color: #0060e6;
  background-color: rgba(0, 105, 255, 0.065);
  border-radius: 18px;
  outline: none;
  border: none;
  width: max-content;
}

a {
  width: 100%;
  color: rgb(26, 26, 26);
}

.icon {
  fill: #828282;
}

.container {
  width: 95%;
  height: 85vh;
  border: 1px solid rgba(26, 26, 26, 0.1);
  border-radius: 8px;
}

.confirm-main {
  max-width: 450px;
}

.wrap-image {
  width: 65px;
  height: 65px;
}

.button-text {
  border-bottom: 1px dashed rgb(0, 105, 255);
}

.plus {
  width: 16px;
  height: 16px;
  color: #fff;
  border-radius: 50%;
  background-color: #0060e6;
}

.calendar-list {
  top: 100%;
  z-index: 1;
  background-color: #fff;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #fff;
  background-color: rgb(248, 228, 54);
}
</style>