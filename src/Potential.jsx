import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import { changePotential } from './actions';

function group(n, groupSize) {
	let groups = range(0, n / groupSize | 0).map(x => groupSize);
	groups.push(n % groupSize);
	return groups;
}

class Potential extends Component {
	handleClick = event => {
		switch (event.target.name) {
			case "increment":
				this.props.changePotential(1);
				break;
			case "decrement":
				this.props.changePotential(-1);
				break;
			default:
				console.log("Um.");
		}
	}
	render() {
		return (
			<div className="Potential">
			<table><tbody><tr>
			<td>
				<button
					onClick={this.handleClick}
					name="increment"
				>+</button>
				<br/>
				<button
					onClick={this.handleClick}
					name="decrement"
				>-</button>
			</td>
			<td>Potential:</td>
			{group(this.props.amount, 5).map((x,i) => <td key={i}>{x}</td>)}
			</tr></tbody></table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	amount: state.potential
})

const mapDispatchToProps = { changePotential }

export default connect(mapStateToProps, mapDispatchToProps)(Potential);
