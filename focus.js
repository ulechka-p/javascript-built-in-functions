const repositoryRootPath = path.resolve(__dirname, '..');
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const merge = (a, b) => a.concat(b);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const uniqueArray = arr => [...new Set(arr)];