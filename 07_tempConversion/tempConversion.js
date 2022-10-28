const ftoc = function(x) {
  let result = (x - 32)* 5/9 ;
  result = result.toFixed(1) ;
  return parseFloat(result) ;
};

const ctof = function(x) {
  let result = x * 9/5 + 32 ;
  result = result.toFixed(1) ;
  return parseFloat(result) ;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
