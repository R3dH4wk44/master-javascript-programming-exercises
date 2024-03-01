function squareElements(arr) {
  // your code here
  let array = [];
  arr.forEach(element => {
    array.push(element * element);
  });
  return array;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
