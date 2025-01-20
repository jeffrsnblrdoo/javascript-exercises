const sumAll = function (from, to) {
    let sum = 0;

    if (
        from < to &&
        from % 1 === 0 &&
        to % 1 === 0 &&
        from > 0 &&
        to > 0 &&
        Number.isInteger(from) &&
        Number.isInteger(to)
    ) {
        for (let i = from; i <= to; i++) {
            sum += i;
        }
    } else if (
        from > to &&
        from % 1 === 0 &&
        to % 1 === 0 &&
        from > 0 &&
        to > 0 &&
        Number.isInteger(from) &&
        Number.isInteger(to)
    ) {
        for (let i = from; i >= to; i--) {
            sum += i;
        }
    } else {
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
