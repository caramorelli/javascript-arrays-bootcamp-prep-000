var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array, element) {
  var new_array = []
  new_array.push(element)
  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    new_array.push(ele)
  }
  return new_array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   return array
}

function addElementToEndOfArray(array, element) {
  
}

function destructivelyAddElementToEndOfArray(array, element) {
  
}