/*
function f () {
  var i = 0;
  {
	  var i = 1;
  }
  var i = 2;
  return i;
}
console.log(f());
*/

/*
function g () {
  let i = 0;
  {
	  let i = 1;
  }
  return i;
}
console.log(g());
*/

function h () {
  const x = 0;
  {
	  x = 1;
  }
  return x;
}
console.log(h());

