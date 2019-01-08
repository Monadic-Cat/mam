import React, { Component } from 'react';
import { range } from 'lodash';

function group(n, groupSize) {
	let groups = range(0, n / groupSize | 0).map(x => groupSize);
	groups.push(n % groupSize);
	return groups;
}

class Potential extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: 15
		};
	}

	render() {
		var a = 0;
		return (
			<div className="Potential">
			<table><tbody><tr>
			{group(this.state.amount, 5).map(x => <td key={a++}>{x}</td>)}
			</tr></tbody></table>
			</div>
		);
	}
}

export default Potential;

