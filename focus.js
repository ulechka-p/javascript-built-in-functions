const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const uniqueArr = (arr) => [...new Set(arr)];
const goToTop = () => window.scrollTo(0, 0);