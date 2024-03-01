function getLargestElement(arr) {
  // your code here
  let num;
  if(arr.length < 1) return 0;

  arr.forEach(element => {
      if(!num) num = element;
      if(element > num ) num = element;
  });
  return num;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;