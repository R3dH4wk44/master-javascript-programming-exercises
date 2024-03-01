// Write your function here
function select(arr,obj){
    let miObj = {};
    arr.forEach(key => {
        if(obj[key]) miObj[key] = obj[key];
    });
    return miObj;
}