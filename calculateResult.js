const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomBoolean = () => Math.random() >= 0.5;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);