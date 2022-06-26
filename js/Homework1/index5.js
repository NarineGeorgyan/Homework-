function mean(int) {
  let sum = 0;
  let i = 0;
  int = "" + int;
  while (i < int.length) {
    sum += Number(int[i]);
    i++;
  }
  return sum / int.length;
}
console.log(mean(666));
