// Write your function here
function getElementsLessThan100AtProperty(obj,key){
    let array = [];
    if(!Array.isArray(obj[key])){
    return [];
    }else{
        obj[key].forEach(element => {
           if(element < 100) array.push(element); 
        });
        return array;
    }
}