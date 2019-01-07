import React, { Component } from 'react';
import './App.css';
import Labels from './Labels';
import Conditions from './Conditions';
import Potential from './Potential';
import Harm from './Harm';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Labels />
				<Conditions />
				<Potential />
				<Harm />
			</div>
		);
	}
}

export default App;
