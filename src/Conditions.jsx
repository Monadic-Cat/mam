import React, { Component } from 'react';

class Condition extends Component {
	render() {
		return (
			<div className="Condition">
				{this.props.name}
			</div>
		);
	}
}

class Conditions extends Component {
	render() {
		return (
			<div className="Conditions">
				<Condition name="Afraid" />
				<Condition name="Angry" />
				<Condition name="Guilty" />
				<Condition name="Hopeless" />
				<Condition name="Insecure" />
			</div>
		);
	}
}

export default Conditions;

