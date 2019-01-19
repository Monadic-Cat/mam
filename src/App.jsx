import React, { Component } from 'react';
import './App.css';
import Labels from './Labels';
import Conditions from './Conditions';
import Potential from './Potential';
import Harm from './Harm';
import ExportButton from './ExportButton';
import CharacterName from './Character';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CharacterName name="Nira YaLae" />
				<Labels />
				<Conditions />
				<Potential />
				<Harm />
				<ExportButton />
			</div>
		);
	}
}

export default App;
