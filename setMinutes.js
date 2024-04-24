const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
console.log("0 || 1 = "+(0 || 1));
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
console.log(1 +  "2" + "2");