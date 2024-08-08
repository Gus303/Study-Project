const mySymbol = Symbol();

const symbolWithDiscription = Symbol('symbol_discription');

const otherSymbol = Symbol();

console.log(mySymbol === otherSymbol);

const obj = {
  [mySymbol]: 'symbol_value'
};

console.log(obj[mySymbol]);