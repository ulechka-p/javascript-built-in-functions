const merge = Object.assign({}, obj1, obj2);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);