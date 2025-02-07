const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;	
};

const sum = function(array) {
  return array.reduce((total, current)=>{return total+current;}, 0);
};

const multiply = function(array) {
  return array.reduce((total,current)=>total*current,1);
};

const power = function(x,n) {
  res = 1;
  for (let i =1; i<=n; i++) {
    res *= x;
  }
  return res;
};

const factorial = function(n) {	
  res = 1;
  for (let i=1;i<=n;i++) {
    res *= i;
  }
  return res;
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
