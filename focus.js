console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const uniqueArr = (arr) => [...new Set(arr)];
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);