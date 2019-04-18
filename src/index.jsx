// This file is part of MAM, a manager for MASKS character sheets.
//
// MAM is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// MAM is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Link,
			Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import makeStore from './store';
import { setLabel, changeHarm, changePotential, setName } from './actions';
import { withNav } from './Navigation';
import Moves from './Moves';
import Notes from './Notes';
import About from './About';
import Disclaimer from './Disclaimer';

const {store, persistor} = makeStore();

ReactDOM.render(
	<Provider store={store}>
	  <PersistGate loading={null} persistor={persistor}>
		 <Router>
			<Switch>
			  <Route exact path="/" component={withNav(App)}/>
			  <Route path="/moves" component={withNav(Moves)}/>
			  <Route path="/notes" component={withNav(Notes)}/>
			  <Route path="/about" component={withNav(About)}/>
			  <Route path="/disclaimer" component={withNav(Disclaimer)}/>
			  <Redirect to="/"/>
			</Switch>
		 </Router>
	  </PersistGate>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
