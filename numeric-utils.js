// Number methods
let numeral = require('numeral');
/* eslint-disable */
Number.prototype.rnd = function (places) {
  return +(Math.round(this + 'e+' + places) + 'e-' + places);
};
Number.prototype.fmt = function (format) {
  return numeral(this).format(format);
};
Number.prototype.fmtCurr = function () {
  return numeral(this).format('0,0.00');
};
Number.prototype.fmtRnd = function (places) {
  let zeroPlaces = '';
  for (let i = 0; i < places; i++) {
    zeroPlaces += '0';
  }
  return numeral(this.rnd(places)).format(`0,0.${zeroPlaces}`);
};
module.exports = {
  numeral: numeral
};
