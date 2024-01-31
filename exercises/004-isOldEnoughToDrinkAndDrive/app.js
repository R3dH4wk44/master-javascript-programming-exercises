function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  if(age>=21){
    console.log("Can legally drink and legally drive but not both")
    return false;
  }else if(age>=16){
    console.log("Can drive but not drink");
    return false;
  }
  else{
    console.log("Can't Drive and Drink");
    return false;
  }
  }
  

