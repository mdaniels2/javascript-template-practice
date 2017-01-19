'use strict';

require('babel-polyfill');

var _api = require('../shared/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browserApi = new _api2.default('GET');

document.querySelector('.app').innerText = browserApi.makeCall();