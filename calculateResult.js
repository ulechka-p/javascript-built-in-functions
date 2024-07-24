const minNumber = arr => Math.min(...arr);
const uniqueArr = (arr) => [...new Set(arr)];
const isWeekday = (date) => date.getDay() % 6 !== 0;