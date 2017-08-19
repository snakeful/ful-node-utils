let pdf = {
  text (str, style) {
    let data = {
      text: str
    };
    if (style) {
      data.style = style;
    }
    return data;
  },
  textCenter (str, style) {
    let data = this.text(str, style);
    data.alignment = 'center';
    return data;
  },
  textLeft (str, style) {
    let data = this.text(str, style);
    data.alignment = 'left';
    return data;
  },
  textRight (str, style) {
    let data = this.text(str, style);
    data.alignment = 'right';
    return data;
  }
};
module.exports = {
  // pdf data structures
  pdf: pdf
};
