function getLengthOfLongestElement(arr) {
    // Your code here
    let stringLargo = 0;
    
    if(arr.length < 1) return 0;
    else{
        arr.forEach(element => {
            if(element.length > stringLargo) stringLargo = element.length;
        });
        return stringLargo;
    }
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
