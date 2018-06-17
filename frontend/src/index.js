/* Application packages imports. */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

/* Application components imports. */
import AppLayout from './components/AppLayout';

/* 
|	BrowserRouter here is used to wrap the AppLayout component to give us the ability to use all functions
|  	such Link, Route, NavLink, etc that 'react-router-dom' brings. 
|   This functions can not be used outside of BrowserRouter. 
*/
ReactDOM.render(<BrowserRouter><AppLayout /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();