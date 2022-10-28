const removeFromArray = function (array, ...args) {
  for ( arg of args ) {
    for ( x = 0 ; x < array.length ; ++x ) {
      if ( arg === array[x]) {
        array.splice(x, 1)
      } else continue
    }
  }
  return array
  };
  
// Do not edit below this line
module.exports = removeFromArray;
