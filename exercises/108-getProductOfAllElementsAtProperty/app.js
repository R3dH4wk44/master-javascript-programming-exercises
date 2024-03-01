function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let producto = 0;
    if(!obj[key] || !Array.isArray(obj[key])) return 0;
    else{
      obj[key].forEach(element => {
        if(producto != 0) producto = producto * element;
        else  producto = element;
      });
      return producto;
    }
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
