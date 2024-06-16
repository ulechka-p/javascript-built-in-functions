const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);