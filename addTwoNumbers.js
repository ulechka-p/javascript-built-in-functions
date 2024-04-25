const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEmptyArray = arr => !arr.length;
console.log(1 +  -"1" + "2");