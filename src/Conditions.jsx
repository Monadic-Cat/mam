import React, { Component } from 'react';
import './Conditions.css';

class Condition extends Component {
	constructor(props) {
		super(props);
		this.state = {
			marked: false
		};
	}
	handleClick = () => {
		this.setState((state, props) => ({
			marked: !state.marked
		}));
	}
	render() {
		return (
			<td
				className={"Condition" + (this.state.marked ? " marked-condition":"")}
				onClick={() => this.handleClick()}
			>
				{this.props.name}
			</td>
		);
	}
}

class Conditions extends Component {
	render() {
		return (
			<div>
			<table className="Conditions"><tbody><tr>
				<Condition name="Afraid" />
				<Condition name="Angry" />
				<Condition name="Guilty" />
				<Condition name="Hopeless" />
				<Condition name="Insecure" />
			</tr></tbody></table>
			</div>
		);
	}
}

export default Conditions;

