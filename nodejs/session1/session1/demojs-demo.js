const dayjs = require("dayjs");

console.log("Current Date:", dayjs().format("DD-MM-YYYY"));

console.log("Current Time:", dayjs().format("HH:mm:ss"));

console.log(
  "One Week Later:",
  dayjs().add(7, "day").format("DD-MM-YYYY")
);

console.log(
  "One Month Before:",
  dayjs().subtract(1, "month").format("DD-MM-YYYY")
);