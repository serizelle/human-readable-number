module.exports = function toReadable (number) {
  const units = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  if (number === 0) {
    return "zero";
  } else if (number < 20) {
    return units[number];
  } else if (number < 100) {
    const ten = Math.floor(number / 10);
    const unit = number % 10;
    return tens[ten] + (unit !== 0 ? " " + units[unit] : "");
  } else if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const remainder = number % 100;
    return units[hundred] + " hundred" + (remainder !== 0 ? " " + toReadable(remainder) : "");
  }
}
