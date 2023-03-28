import ProxyPolyfillBuilder from 'proxy-polyfill/src/proxy';
import './index.scss';

window.Proxy = ProxyPolyfillBuilder();

import { initialize } from './calculate.imc.js';

window.onload = function() {
    initialize();
}