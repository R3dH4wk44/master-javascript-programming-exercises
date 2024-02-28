// Write your function here
function getNthElementOfProperty(obj,key,nth){
    if(!obj[key] || !Array.isArray(obj[key])){
        return undefined;
    }else{
        return obj[key][nth];
    }
}