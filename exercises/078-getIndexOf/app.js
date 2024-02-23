// Write your function here
function getIndexOf(char,str){
    let index = -2;
    let i = 0;
    while(index === -2){
        if(i ===str.length) index = -1;
        if(str[i] === char) index = i;

        else i++;
        
    }
    return index;
}