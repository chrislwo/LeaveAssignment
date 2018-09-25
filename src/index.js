import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './step2/App';
import registerServiceWorker from './registerServiceWorker';

//TODO 
//https://www.robinwieruch.de/react-fetching-data/
ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
