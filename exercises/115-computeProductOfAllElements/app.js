function computeProductOfAllElements(arr) {
  // your code here
  let producto = 0;

  arr.forEach(element => {
    if(producto === 0) producto = element;
    else producto = producto * element;
  });
  return producto;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
