// Write your function here
function computeAverageOfNumbers(input){

    var sum = 0;

    for(let i = 0; i < input.length; i++){
        sum += input[i];
    }

    if(input.length != 0){
        var total = sum / input.length;
    }
    else{
        var total = 0;
    }
        return total;

}