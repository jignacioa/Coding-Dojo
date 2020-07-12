import React from 'react'; // React is the entire React library, react is in node_modules
import ReactDOM from 'react-dom'; // react-dom is in node_modules
import './index.css'; //this index is not modules so it is a global style 
import App from './App';
import * as serviceWorker from './serviceWorker';

//this calls the App function 
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
