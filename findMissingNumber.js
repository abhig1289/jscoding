const arr = [1, 2, 3, 6, 8, 9, 10];

const findMissingNumbers = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const fullRange = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const missingNumbers = fullRange.filter(num => !arr.includes(num));
  return missingNumbers;
};

const output = findMissingNumbers(arr);
console.log(output); // [4, 5, 7]
