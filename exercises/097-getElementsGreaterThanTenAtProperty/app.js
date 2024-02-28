// Write your function here
function getElementsGreaterThan10AtProperty(obj,key){
    let array = [];
    if(!Array.isArray(obj[key])){
    return [];
    }else{
        obj[key].forEach(element => {
           if(element > 10) array.push(element); 
        });
        return array;
    }}