function getAllElementsButNth(array, n) {
    // your code here
    var array1 = array.slice();
    array1.splice(n,1);
    return array1;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
