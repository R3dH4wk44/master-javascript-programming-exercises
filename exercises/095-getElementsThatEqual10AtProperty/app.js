// Write your function here
function getElementsThatEqual10AtProperty(obj,key){
    let array = [];
    if(Array.isArray(obj[key])){
        obj[key].forEach(element => {
            if(element === 10) array.push(element);
        });
    
        return array;
    }
    else return [];
}