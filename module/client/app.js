require.register("/Users/madaniels/js-tutorial/src/client/app.js", function(exports, require, module){
  import 'babel-polyfill';
import Api from '../shared/api';

const browserApi = new Api('GET');

document.querySelector('.app').innerText = browserApi.makeCall();

  
});

require("/Users/madaniels/js-tutorial/src/client/app.js");

