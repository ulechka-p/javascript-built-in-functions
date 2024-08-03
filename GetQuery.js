const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);