// String methods
/* eslint-disable */
String.prototype.fmt = function (args) {
  let formatted = this.valueOf();
  for (let index in args) {
    formatted = formatted.replace(`{${index}}`, args[index]);
  }
  return formatted;
};
module.exports = {
  atob: require('atob'),
  btoa: require('btoa')
};