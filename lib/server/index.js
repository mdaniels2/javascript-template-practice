'use strict';

/* eslint-disable no-console */

var Api = require('../shared/api');

var myApi = new Api(Function.caller.toString());

console.log(myApi.makeCall());