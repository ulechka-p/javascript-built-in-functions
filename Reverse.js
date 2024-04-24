const randomString = () => Math.random().toString(36).slice(2);
const channel = getChannel(computedAppVersion);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);