const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sumResult = 0;
	arr.map(element => {
    sumResult += element;

  })

  return sumResult;

};

const multiply = function(arr) {
  let prodResult = 1;
	arr.map(element => {
    prodResult *= element;

  })

  return prodResult;

};

const power = function(base,exp) {
  
  rez = base**exp;
	return rez;

};

const factorial = function(nr) {
	if(nr===0)
    return 1;

  fact=1;
  for (let index = 1; index <= nr; index++) 
  {
    
    fact *= index;


  }

  return fact;
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
