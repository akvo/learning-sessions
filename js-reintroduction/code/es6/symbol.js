(function(g) {

  // module scoped symbol
  var key = Symbol("key");

  function MyClass(privateData) {
    this[key] = privateData;
  }

  MyClass.prototype = {
    inc: function() {
      this[key]++;
    },
    state: function () {
      return this[key];
    }
  };
  
  g.MyClass = MyClass;

})(global);

var c = new MyClass(10)
console.log(c["key"] === undefined)
c.inc();
console.log(c.state());
