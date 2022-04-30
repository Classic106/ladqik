export const state = () => ({
  step: 0,
  date: null,
  isAmPm: false,
  timeZone: "Europe/Sofia",
});

export const mutations = {
  setDate(state, date) {
    state.date = date;
  },
  setTimeDate(state, date) {
    state.date = date;
    state.step = 1;
  },
  setIsAmPm(state, isAmPm) {
    state.isAmPm = isAmPm;
  },
  setTimeZone(state, timeZone) {
    state.timeZone = timeZone;
  },
};

export const getters = {
  getStep(state) {
    return state.step;
  },
  getDate(state) {
    return state.date;
  },
  getIsAmPm(state) {
    return state.isAmPm;
  },
  getTimeZone(state) {
    return state.timeZone;
  },
};
