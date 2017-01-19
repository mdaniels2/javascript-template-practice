/* eslint-disable no-console */

const Api = require('../shared/api');

const myApi = new Api(Function.caller.toString());

console.log(myApi.makeCall());
