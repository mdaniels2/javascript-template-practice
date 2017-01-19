require.register("/Users/madaniels/js-tutorial/src/server/index.js", function(exports, require, module){
  /* eslint-disable no-console */

const Api = require('../shared/api');

const myApi = new Api(Function.caller.toString());

console.log(myApi.makeCall());

  
});

require("/Users/madaniels/js-tutorial/src/server/index.js");

