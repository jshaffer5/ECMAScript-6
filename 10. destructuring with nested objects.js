const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Example with default naming
const { today: { low, high}} = LOCAL_FORECAST;

// Example of destructuring nested objects with renaming
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

