import React from 'react';
import ReactDOM from 'react-dom';
import SwitchPage from './page/SwitchPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SwitchPage />, document.getElementById('root'));
registerServiceWorker();
