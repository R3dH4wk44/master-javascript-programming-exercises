function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let array = [];
    if(!Array.isArray(obj[key])) return [];
    else{
      obj[key].forEach(element => {
        if(element.length % 2 == 0) array.push(element);
      });
      return array;
    }
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
