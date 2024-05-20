const channelName = getChannelName(channel);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isTabInView = () => !document.hidden;