<template>
  <div class="position-relative">
    <button
      v-on:click.stop="isOpen = !isOpen"
      ref="button"
      class="d-flex align-items-center px-2 py-1"
    >
      <Icon icon="earth-asia" class="mr-3" />
      {{ timeValue }}
      <span class="ml-2 text-nowrap">{{ `(${time})` }}</span>
      <Icon :icon="isOpen ? 'angle-up' : 'angle-down'" class="ml-3" />
    </button>
    <div v-if="isOpen" ref="select" class="zones position-absolute w-100">
      <div class="p-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          v-model="search"
        />
      </div>
      <div class="d-flex justify-content-between align-items-center m-3">
        <span class="text-uppercase">timezone</span>
        <div class="am-pm px-3">
          <span class="text-nowrap">am/pm</span
          ><ToggleButton
            id="switch"
            labelEnableText=""
            labelDisableText=""
            :defaultState="true"
            v-on:change="isAmPm = !isAmPm"
            class="m-0"
          />
          <span>24 h</span>
        </div>
      </div>
      <div class="d-flex flex-grow-1 flex-column container p-0">
        <ul class="overflow-auto p-0">
          <li
            v-for="zone of timeZones"
            :key="`${zone.id}${zone.content}`"
            class="font-weight-bold li-header"
          >
            <span class="pl-3 py-1">{{ zone.continent }}</span>
            <ul class="p-0">
              <li
                v-for="item of zone.newRow"
                :key="`${item.id}${item.tz}`"
                class="
                  font-weight-light
                  li-item
                  pl-4
                  py-1
                  d-flex
                  justify-content-between
                "
                :class="isItemActive(zone.id, item.id) && 'item-active'"
                v-on:click="value = `${zone.id}:${item.id}`"
              >
                <span>{{ item.value }}</span>
                <span class="pr-3">{{ timeToString(item.tz, isAmPm) }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Icon from "@/components/icons";
import timeZones from "@/helpers/timeZones";
import ToggleButton from "@/components/common/ToggleButton";
import { timeToString } from "@/helpers";

export default {
  name: "TimeZones",
  components: { Icon, ToggleButton },
  watch: {
    isAmPm() {
      this.setIsAmPm(this.isAmPm);
      this.time = timeToString(this.tz, this.isAmPm);
    },
    value() {
      const ids = this.value.split(":");
      const row = timeZones.filter((row) => row.id === +ids[0])[0];
      const zone = row.newRow.filter((zone) => zone.id === +ids[1])[0];
      this.tz = zone.tz;
      this.timeValue = zone.value;

      this.setTimeZone(this.tz);
      this.time = timeToString(this.tz, this.isAmPm);
    },
    search() {
      if (this.search) {
        const filtered = timeZones.filter((row) => {
          const newRow = row.newRow.filter((val) => {
            if (
              val.tz.includes(this.search) ||
              val.value.includes(this.search)
            ) {
              return val;
            }
            return false;
          });

          if (newRow.length) {
            row.newRow = newRow;
            return row;
          }
          return false;
        });
        this.timeZones = filtered;
        return;
      }
      this.timeZones = timeZones;
    },
  },
  data: () => ({
    isAmPm: false,
    isOpen: false,
    timer: null,
    search: "",
    time: "",
    value: "2:5",
    tz: "Europe/Sofia",
    timeValue: "E. Europe Standard Time",
    timeZones: [...timeZones],
    currentDate: new Date(),
  }),
  created() {
    this.isAmPm = this.$store.getters["labServise/getDate"];
    this.time = timeToString(this.tz, this.isAmPm);
  },
  methods: {
    ...mapMutations({
      setTimeZone: "labServise/setTimeZone",
      setIsAmPm: "labServise/setIsAmPm",
    }),
    timeToString(zone, isAmPm) {
      return timeToString(zone, isAmPm);
    },
    isItemActive(zoneId, itemId) {
      const ids = this.value.split(":");
      const isZoneActive = zoneId === +ids[0];
      const isItemActive = itemId === +ids[1];
      return isZoneActive && isItemActive;
    },
    closeSelectOutside(e) {
      let { select, button } = this.$refs;
      let { target } = e;

      if (!select || !button || !target) {
        return;
      }
      if (
        select !== target &&
        !select.contains(target) &&
        button !== target &&
        !button.contains(target)
      ) {
        this.isOpen = false;
      }
    },
    startTimer() {
      this.timer = setInterval(
        function () {
          this.time = timeToString(this.tz, this.isAmPm);
          this.currentDate = new Date();
        }.bind(this),
        1000
      );
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
  },
  mounted() {
    this.startTimer();
    document.addEventListener("click", this.closeSelectOutside);
  },
  created() {
    this.tz = this.$store.getters["labServise/getTimeZone"];
    this.isAmPm = this.$store.getters["labServise/getIsAmPm"];
  },
  destroyed() {
    this.stopTimer();
    document.addEventListener("click", this.closeSelectOutside);
  },
};
</script>

<style scoped>
button {
  max-width: 100%;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.1);
}
.am-pm {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 13px;
}
.zones {
  top: auto;
  bottom: 100%;
  background: #fff;
  z-index: 1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
}
.container {
  height: 200px;
}
.li-header {
  color: #000;
}
.li-item {
  color: #828282;
}
.item-active {
  color: #fff;
  background-color: rgb(0, 105, 255);
}
</style>
