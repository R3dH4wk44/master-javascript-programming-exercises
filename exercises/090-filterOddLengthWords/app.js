function filterOddLengthWords(words) {
    // your code here
    var array = words.filter((word) => word.length %2 != 0);
    return array;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
