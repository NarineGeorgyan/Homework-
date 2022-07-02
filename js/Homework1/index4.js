function allTruthy(...args) {
  let i = 0;
  while (i < arguments.length) {
    if (
      arguments[i] == false ||
      arguments[i] == undefined ||
      arguments[i] == " " ||
      arguments[i] == 0 ||
      arguments[i] == null ||
      isNaN(arguments[i])
    ) {
      return false;
    }
    i++;
  }
  return true;
}
console.log(allTruthy(true, false, true));
