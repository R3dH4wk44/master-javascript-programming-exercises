function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let array = [];
    if(!obj[key] || !Array.isArray(obj[key])) return [];
    else{
    for(let i = 0; i < obj[key].length - 1; i++){

      array.push(obj[key][i]);

    }
    return array;
  }
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
