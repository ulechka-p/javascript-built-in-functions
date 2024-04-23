const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const scriptRootPath = path.join(repositoryRootPath, 'script');
const getRandomBoolean = () => Math.random() >= 0.5;