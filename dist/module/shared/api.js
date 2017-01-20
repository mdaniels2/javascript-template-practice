require.register("/Users/madaniels/js-tutorial/src/shared/api.js", function(exports, require, module){
  export default class Api {
  constructor(method) {
    this.method = method;
  }

  makeCall() {
    return `I am making a ${this.method} method call.`;
  }
}

module.exports = Api;

  
});

require("/Users/madaniels/js-tutorial/src/shared/api.js");

