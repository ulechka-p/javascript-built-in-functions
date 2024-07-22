const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const results = await Promise.all(resultingPromises);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;