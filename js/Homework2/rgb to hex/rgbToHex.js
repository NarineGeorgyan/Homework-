function rgbToHex(rgb) {
  rgb = rgb.split(",");
  const arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const arrNew = [];
  rgb = rgb
    .reduse((agg, val) => {
      for ([key, value] of arr.entries()) {
        if (mn == key) {
          agg.push(value);
        }
        if (qanord == key) {
          agg.push(value);
        }
      }
      return agg;
    }, [])
    .join("");
  console.log(rgb);
}
rgbToHex("45, 255, 192");
