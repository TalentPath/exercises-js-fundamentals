/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */

let args = process.argv; 
let temp = args[2] 

function fahrenheitToCelsius(temp) {
  // This is your job. :).
  
  let C = (temp-32)* (5/9);
  console.log(`${temp} degrees F is ${C} in Celcius `);

}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');

  // Your sanity checks go here.
  console.log(args);
fahrenheitToCelsius(0);
}

module.exports = fahrenheitToCelsius;
