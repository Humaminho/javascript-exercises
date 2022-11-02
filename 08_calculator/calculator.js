const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, number) => total + number,0);
};

const multiply = function(array) {
  return array.reduce((total, number) => total * number,1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a){
  let array=[]
  for (let x=a ; x>=1 ; x--) {
    array.push(x);
  } return array.reduce((total, number) => total * number,1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


function factoriall(a) {
  let array=[]
  for (let x=a ; x>=1 ; x--) {
    array.push(x);
  } return array.reduce((total, number) => total * number,1);
};
factoriall(4)