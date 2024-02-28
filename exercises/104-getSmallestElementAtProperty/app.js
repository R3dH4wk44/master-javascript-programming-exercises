function getSmallestElementAtProperty(obj, key) {
    // your code here
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return [];
  else{
    let num = 99999999999999;
    obj[key].forEach(element => {
      if( element < num) num = element;
        
      
    });
    return num;
  }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
