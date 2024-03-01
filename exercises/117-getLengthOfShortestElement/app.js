function getLengthOfShortestElement(arr) {
    // your code here
    var num;
    if(arr.length < 1) return 0;
   
    arr.forEach(element => {
        if(!num) num = element.length;
        if(element.length < num) num = element.length;
    });
    return num;

}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
