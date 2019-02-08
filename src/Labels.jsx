//@flow
import React, { Component } from 'react';
import './Labels.css';
import Label from './Label';

class Labels extends Component<{}> {
	render() {
		return (
			<div>
			<table className="Labels">
			<tbody>
				<Label name="Danger" />
				<Label name="Freak" />
				<Label name="Savior" />
				<Label name="Superior" />
				<Label name="Mundane" />
			</tbody></table>
			</div>
		);
	}
}

export default Labels;
