function getElementsUpTo(array, n) {
  // your code here
  let array1 =  array.slice(0,n);
  return array1;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
