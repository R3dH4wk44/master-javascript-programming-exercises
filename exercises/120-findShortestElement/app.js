function findShortestElement(arr) {
    // your code here
    let num;
    let shortString;

    if (arr.length < 1 ) return '';
    arr.forEach(element => {
        if(!num){
             num = element.length; 
             shortString = element
        }
        if(num > element.length){
            num = element.length;
            shortString = element;
        }
    });
    return shortString;
}


let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'