import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './App';
import './style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
