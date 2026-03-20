const palindromes = function (str) {
    const len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
};

// Do not edit below this line
module.exports = palindromes;
