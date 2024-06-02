const resultingPromises = urls.map((url) => makHttpRequest(url));
const executableName = getExecutableName(channel, appName);