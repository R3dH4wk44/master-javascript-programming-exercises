function getElementsAfter(array, n) {
  // your code here
  let array1 = array.slice(n+1, array.length+1);
  return array1;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
