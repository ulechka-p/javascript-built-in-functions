const executableName = getExecutableName(channel, appName);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const results = await Promise.all(resultingPromises);