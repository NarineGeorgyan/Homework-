function isSpecialArray(arr) {
  let i = 0;
  let isSpecial = false;
  let counter = 0;
  const evenArray = [];
  const oddArray = [];
  let even = 0;
  let odd = 0;
  while (i < arr.length) {
    if (i % 2 === 0 && arr[i] % 2 == 0) {
      evenArray[even] = arr[i];
      counter++;
      even++;
    } else if (i % 2 === 0 && arr[i] % 2 !== 0) {
      console.log(`index ${i} has an odd number ${arr[i]}`);
    }
    if (i % 2 !== 0 && arr[i] % 2 !== 0) {
      oddArray[odd] = arr[i];
      odd++;
      counter++;
    } else if (i % 2 !== 0 && arr[i] % 2 == 0) {
      console.log(`index ${i} has an even number ${arr[i]} `);
    }
    i++;
  }
  if (counter === arr.length) {
    console.log(`even:[${evenArray}] odd:[${oddArray}]`);
    return true;
  }

  return false;
}
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
