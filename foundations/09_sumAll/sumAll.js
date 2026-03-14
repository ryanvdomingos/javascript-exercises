const sumAll = function(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max)) {
        return "Error"
    } 



  return (max*(max+1) - (min-1)*min) / 2;
};

// Do not edit below this line
module.exports = sumAll;
