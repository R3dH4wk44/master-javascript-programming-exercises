function filterOddElements(arr) {
  // your code here
  let array = [];

    arr.forEach(element => {
      if(element % 2 != 0) array.push(element);
    });

  return array;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
