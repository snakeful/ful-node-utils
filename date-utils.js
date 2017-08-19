// Date methods
const MillisecsPerDay = 86400000;
/* eslint-disable */
Date.prototype.toUTC = function () {
  let date = new Date();
  date.setTime(this.getTime() - date.getTimezoneOffset() * 60000);
  return date;
};
Date.prototype.toUTCString = function () {
  return this.toUTC().toISOString().substring(0, 10);
};
Date.prototype.toDateString = function () {
  return this.toISOString().substring(0, 10);
};
Date.prototype.startOfMonth = function () {
  return new Date(this.getFullYear(), this.getMonth(), 1);
};
Date.prototype.endOfMonth = function (endOfDay) {
  let date = new Date(this.getFullYear(), this.getMonth() + 1, 0);
  if (endOfDay) {
    date.setHours(23, 59, 59, 999);
  }
  return date;
};
Date.prototype.startOfDay = function () {
  let date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  return date;
};
Date.prototype.endOfDay = function () {
  let date = new Date(this.getTime());
  date.setHours(23, 59, 59, 999);
  return date;
};
Date.prototype.daysInMillisecs = function (days) {
  return (days || 1) * MillisecsPerDay;
};
