const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const apmRootPath = path.join(repositoryRootPath, 'apm');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());