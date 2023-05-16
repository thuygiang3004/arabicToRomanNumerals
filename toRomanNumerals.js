const numbersMap = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function addRomanString(input, romanString) {
  let [arabic, roman] = numbersMap.find((val) => val[0] <= input);
  romanString += roman;
  let remain = input - arabic;
  if (remain > 0) return addRomanString(remain, romanString);
  else {
    return romanString;
  }
}

const toRoman = (inputNumber) => {
  let result = addRomanString(inputNumber, "");
  return result;
};

module.exports = toRoman;
