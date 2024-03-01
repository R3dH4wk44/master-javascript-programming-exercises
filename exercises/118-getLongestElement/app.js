function getLongestElement(arr) {
    // your code here
    let num;
    let longString;

    if (arr.length < 1 ) return '';
    arr.forEach(element => {
        if(!num){
             num = element.length; 
             longString = element
        }
        if(num < element.length){
            num = element.length;
            longString = element;
        }
    });
    return longString;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
