const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const randomString = () => Math.random().toString(36).slice(2);