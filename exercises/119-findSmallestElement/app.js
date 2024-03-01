function findSmallestElement(arr) {
    // your code here
    let num;

    if(arr.length < 1) return 0;

    arr.forEach(element => {
        if(!num) num = element;
        if(element < num) num = element;
    });
    return num;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1