const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);