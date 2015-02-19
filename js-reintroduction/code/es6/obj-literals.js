
var Animal = {
  toString() {
    return 'Animal ';
  }
};

var dog = {
  __proto__: Animal,
  toString() {
    return 'Dog - ' + super.toString();
  }
};

console.log(dog.toString());

