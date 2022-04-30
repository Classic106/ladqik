const timeToString = (timeZone = "Europe/Sofia", isAmPm, d = new Date()) => {
  const date = new Date(d.toLocaleString("en-US", { timeZone }));

  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (("" + minutes).length === 1) {
    minutes = `0${minutes}`;
  }

  return convert_24h_to_AmPm_as_string(hours, minutes, isAmPm);
};

const convert_24h_to_AmPm_as_string = (hours, minutes, isAmPm) => {
  if (isAmPm) {
    const h = ((hours + 11) % 12) + 1;
    const meridian = hours >= 12 ? "pm" : "am";
    return `${h}:${minutes} ${meridian}`;
  }

  return `${hours}:${minutes}`;
};

export { timeToString, convert_24h_to_AmPm_as_string };
