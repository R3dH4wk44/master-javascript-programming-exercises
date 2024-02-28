function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let average = 0;
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return 0;
  else{
    let media = 0;
    obj[key].forEach(element => {
      media += element;
    });
    average = media /obj[key].length;
    return average;
  }
}