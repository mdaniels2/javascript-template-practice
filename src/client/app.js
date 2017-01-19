import 'babel-polyfill';
import Api from '../shared/api';

const browserApi = new Api('GET');

document.querySelector('.app').innerText = browserApi.makeCall();
