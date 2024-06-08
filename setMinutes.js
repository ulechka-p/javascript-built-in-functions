const uniqueArray = arr => [...new Set(arr)];
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');