function removeArrayValues(obj) {
    // your code here
    for(key in obj){
        if(typeof obj[key] === 'object'){
            delete obj[key];
        }
    }
    return obj;
}