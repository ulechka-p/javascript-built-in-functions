const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);