var chocolateBars=["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(a,b){
 return [b,...a]
}
function destructivelyAddElementToBeginningOfArray (array,element){
  array.unshift(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
array.push(element)
return array
}
function addElementToEndOfArray(array, element){
  return [...array,element]
}
