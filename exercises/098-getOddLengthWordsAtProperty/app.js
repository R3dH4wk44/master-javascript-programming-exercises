// Write your function here
function getOddLengthWordsAtProperty(obj,key){
    let array = [];
    if(!Array.isArray(obj[key])) return [];
    else{
        obj[key].forEach(element => {
           if(element.length % 2 !== 0) array.push(element); 
        });
    return array;
    }
}