const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const isEven = (num) => num % 2 === 0;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();