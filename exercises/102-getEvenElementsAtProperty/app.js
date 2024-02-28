function getEvenElementsAtProperty(obj, key) {
    // your code here
    let array = [];
    if(!Array.isArray(obj[key])) return [];
    else{
      obj[key].forEach(element => {
        if(element % 2 == 0) array.push(element);
      });
      return array;
    }   
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
