const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const allResults = await Promise.all(items.map(async (item) => {}));
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());