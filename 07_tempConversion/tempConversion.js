const ftoc = function(temp) {
  const fahr = temp;
  let cels = Math.round(((fahr - 32) * (5/9)) * 10) / 10;
  return cels;
};

const ctof = function(temp) {
  const cels = temp;
  let fahr = Math.round((cels * (9/5) + 32) * 10) / 10;
  return fahr;
};

// ftoc(32); // 0
// ftoc(100); // 37.8
// ftoc(-100); // -73.3

// ctof(0); // 32
// ctof(73.2); // 163.8
 ctof(-10); // 14

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};