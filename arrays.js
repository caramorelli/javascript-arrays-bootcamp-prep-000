// var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]

function addElementToBeginningOfArray(array, element) {
  var new_array = []
  new_array.push(element)
  for (var i = 0; i < array.length; i++) {
    new_array.push()
  }
  return new_array;
}

function destructivelyAddElementToBeginningOfArray(array, elemnt) {
  
}