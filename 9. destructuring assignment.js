const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// ES6 code with destructuring
const { today, tomorrow } = HIGH_TEMPERATURES
// Assignment with new variable names
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// ES5 code, without destructuring assignment:
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
