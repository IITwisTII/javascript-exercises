const sumAll = function(x, y) {
    if (x < 0 || y < 0) {
        return "ERROR";
    } else if (Number.isNaN(x) || Number.isNaN(y)) {
        return "ERROR";
    } else if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    } else {
        let sum = 0;
        let lowernum;
        let highernum;
        
        if (x < y) {
            lowernum = x;
            highernum = y;
        } else if (y < x) {
            lowernum = y;
            highernum = x;
        }

        for (let i = lowernum; i <= highernum; i++)
            sum += i;
        return sum;
    }
};

console.log(sumAll(2.5, 4000))

// Do not edit below this line
module.exports = sumAll;
