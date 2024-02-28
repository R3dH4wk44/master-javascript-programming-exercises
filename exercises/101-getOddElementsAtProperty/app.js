function getOddElementsAtProperty(obj, key) {
    // your code here
    let array = [];
    if(!Array.isArray(obj[key])) return [];
    else{
      obj[key].forEach(element => {
        if(element % 2 != 0) array.push(element);
      });
      return array;
    }   
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
