function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let array = [];
    if(!Array.isArray(obj[key])) return [];
    else{
      obj[key].forEach(element => {
        array.push(element * element);
      });
      return array;
    }    
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
