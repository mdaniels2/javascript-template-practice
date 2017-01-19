require.register("/Users/madaniels/js-tutorial/src/shared/dog.js", function(exports, require, module){
  class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Wah wah, I am ${this.name}`;
  }
}

module.exports = Dog;

  
});

require("/Users/madaniels/js-tutorial/src/shared/dog.js");

