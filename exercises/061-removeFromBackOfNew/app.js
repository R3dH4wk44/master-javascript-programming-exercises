function removeFromBackOfNew(arr) {
  // your code here
  let arr1 = arr.slice(arr.length);  
  return arr1;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
