const removeFromArray = function (array, ...numToRemove) {
    return array.filter((item) => !numToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
