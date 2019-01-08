import React, { Component } from 'react';
import { range } from 'lodash';

class HarmBox extends Component {
	render() {
		return (
			<input type="checkbox" />
		);
	}
}

class Harm extends Component {
	render() {
		return (
			<div className="Harm">
				<h3> Harm </h3>
				{range(0, 6).map(x => <HarmBox key={x} />)}
			</div>
		);
	}
}

export default Harm;

