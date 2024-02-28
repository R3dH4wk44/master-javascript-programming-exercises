// Write your function here
function getFirstElementOfProperty(obj, key) {

    if (!obj.hasOwnProperty(key)) {
      return undefined;
    }
    
    
    let value = obj[key];
    
    
    if (Array.isArray(value) && value.length > 0) {
      return value[0]; 
    } else {
      return undefined;     }
  }
  
