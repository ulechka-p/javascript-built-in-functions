const allResults = await Promise.all(items.map(async (item) => {}));
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));