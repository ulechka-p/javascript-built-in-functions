var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
[foo, bar] = [bar, foo];