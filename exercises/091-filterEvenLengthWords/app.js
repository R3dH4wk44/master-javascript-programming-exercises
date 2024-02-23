function filterEvenLengthWords(words) {
    // your code here
    var array = words.filter((word) => word.length %2 === 0);
    return array;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
