
class Animal {
  constructor (name) {
    this.name = name;
  }
}

class Dog extends Animal {}

var d = new Dog('shepherd');

console.log(d);
