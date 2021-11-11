/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  return ((temp * 1.8) + 32);
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');

  // Your sanity checks go here.
  //console.log("Hey just making sure that 35 turns into " + celsiusToFahrenheit(35))
}

module.exports = celsiusToFahrenheit;
