function arrSort(array) {
  array.sort((a, b) => a - b);

  return array;
}

let result = arrSort([1, 3, 2, 4, 21, 54, 11, 66, 77]);

console.log(result);
