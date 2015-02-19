
var [a,,b] = [1,2,3];
console.log(a, b);

var {name: n, lastname: l} = {name: 'Iván', lastname: 'Perdomo'};
console.log(n,l);


function g({name: x}) {
 return x;
}

console.log(g({name: 'Akvo'}));
