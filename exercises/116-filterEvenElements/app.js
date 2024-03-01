function filterEvenElements(arr) {
    // your code here
    let array = [];

    arr.forEach(element => {
        if(element % 2 == 0) array.push(element);
    });
    return array;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
