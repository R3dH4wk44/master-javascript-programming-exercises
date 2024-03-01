function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let sum = 0; 
    if(!obj[key] || !Array.isArray(obj[key])) return 0;
    else{
        obj[key].forEach(key => {
            sum += key;
        });
        return sum;
    }
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
