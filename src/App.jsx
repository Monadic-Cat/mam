//@flow
import React, { Component } from 'react';
import './App.css';
import Labels from './Labels';
import Conditions from './Conditions';
import Potential from './Potential';
import Harm from './Harm';
import ExportButton from './ExportButton';
import CharacterPrelude from './Character';
import CharacterSwitcher from './CharacterSwitcher';
import ExportPreview from './Preview';

class App extends Component<{}> {
	render() {
		return (
			<div className="App">
				<CharacterPrelude />
				<Labels />
				<Conditions />
				<Potential />
				<Harm />
				<ExportButton />
				<CharacterSwitcher />
				{/*<ExportPreview />*/}
			</div>
		);
	}
}

export default App;
