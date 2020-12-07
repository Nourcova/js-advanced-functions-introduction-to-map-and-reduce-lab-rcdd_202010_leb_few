// Your code here
function mapToNegativize(arr){
const mapped = arr.map(elem =>elem*-1);
  return mapped;
}

function mapToNoChange(arr){
  const mapped=arr.map(elem=>{
    return elem});
  return mapped;
}

function mapToDouble(arr){
  const mapped=arr.map(elem=>{
    return elem*2});
  return mapped;
}

function mapToSquare (arr){
  const mapped=arr.map(elem=>{
    return Math.pow(elem, 2);});
  return mapped;
}

function reduceToTotal(sourceArray,startingPoint){
  const sum=sourceArray.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
  if (startingPoint!==undefined){
  return sum+startingPoint;
  }
  else{
    return sum;
  }
}

function reduceToAllTrue(sourceArray){
let fuk=0
let len=sourceArray.length;
const sum=sourceArray.reduce((accumulator,currentvalue)=>{
  if (currentvalue!==false){
  fuk++;
  }
return fuk
  
});
if (fuk===len){
  return true;
}
else{
  return false;
}
}



