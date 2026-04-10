const totalIntegers = function(data) {
  if (Number.isInteger(data)) {
    return 1;
  }

  if (typeof data === "object" && data !== null) {
    let count = 0;

    const values = Object.values(data);

    for (const value of values) {
      count += totalIntegers(value);
    }
    return count;
  }
  return 0;
};

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7
console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } })); // 4
// Do not edit below this line
module.exports = totalIntegers;
