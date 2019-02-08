//@flow
import React, { Component } from 'react';
import Condition from './Condition';
import './Conditions.css';



class Conditions extends Component<{}> {
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
