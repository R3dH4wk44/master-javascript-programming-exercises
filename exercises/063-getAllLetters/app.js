function getAllLetters(str) {
    // your code here
    array = [];
    for(let i=0; i<str.length;i++){
        array[i] = str.charAt(i)
    }
    return array;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
