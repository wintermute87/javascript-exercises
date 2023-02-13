const convertToCelsius = function(fahrenheit) {

  let result = (fahrenheit - 32) * 5 / 9 ;

  let celsiusResult = Math.round(result*10)/10 ;
  return celsiusResult

};

const convertToFahrenheit = function(celsius) {

  

  let result = celsius *9/5+32;

  let fahrenheitResult = Math.round(result*10)/10 ;
  return fahrenheitResult

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
