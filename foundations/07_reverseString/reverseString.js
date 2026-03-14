const reverseString = function(input) {
    let arr = [];
    for(let i = input.lenght ; i > 0; i--) {
        arr.push(input[i - 1]);
    }
    return arr;
};

// Do not edit below this line
module.exports = reverseString;
