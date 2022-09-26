const ftoc = function(fahrenheit) {
  let temp = (fahrenheit -32) / (9/5);
  return +temp.toFixed(1);
};

const ctof = function(celsius) {
  let temp = celsius * (9/5) + 32;
  return +temp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
