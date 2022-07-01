module.exports = function reverse(n) {
    n = Math.abs(n);
    let string = n.toString();
    let result = "";
    let len = string.length;
    for (i = 0; i < len; i++) {
        result = string[i] + result;
    }
    return result * 1;
};
