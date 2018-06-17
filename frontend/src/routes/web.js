/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where we register web routes for the application. 
|
*/

/* Application packages imports. */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Application components imports. */
import Welcome from '../components/Welcome';
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';

export default () => (
	<Switch>
		<Route path="/" exact component={Welcome} />
		<Route path="/home" component={Home} />
		<Route path="/about" component={About} />

		{/* Rendering NotFound component when user goes to path that is not defined in this file. */}
		<Route component={NotFound} />
	</Switch>
)