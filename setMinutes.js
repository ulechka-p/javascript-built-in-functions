const symbolsPath = path.join(buildOutputPath, 'symbols');
const isWeekday = (date) => date.getDay() % 6 !== 0;
const currentDate = () => new Date().toLocaleDateString('en-US');
console.log("0 && 1 = "+(0 && 1));