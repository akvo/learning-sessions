var events = [1,2,3,4,5], fives = [];

var odds = events.map(v => v + 1);
var nums = events.map((v, i) => v + i);

nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

console.log(odds);
console.log(nums);
console.log(fives);
