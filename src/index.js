import React from 'react';
import ReactDOM from 'react-dom';
import { IRouter } from './router';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<IRouter />, document.getElementById('root'));

serviceWorker.unregister();
