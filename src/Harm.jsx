import React, { Component } from 'react';

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
				<HarmBox />
				<HarmBox />
				<HarmBox />
				<HarmBox />
				<HarmBox />
				<HarmBox />
			</div>
		);
	}
}

export default Harm;

