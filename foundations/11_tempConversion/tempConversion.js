const convertToCelsius = function(F) {
    C = Math.round((F - 32) * (5 / 9));

};

const convertToFahrenheit = function(C) {
    F = Math.round(C * (9 / 5) + 32);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
