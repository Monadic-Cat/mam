//@flow
// This file is part of MAM, a manager for MASKS character sheets.
//
// MAM is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// MAM is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import { changePotential, markPotential } from '../actions';
import { groupPotential as group } from '../sheet';
import { withCharacterState } from '../store';
import './Potential.sass';

type Props = {
	amount: number,
	groupSize: number,
	marked: number,
	changePotential: number => void,
	markPotential: boolean => void
}

class Potential extends Component<Props> {
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
	markClick = (event, index) => {
		this.props.markPotential(!(this.props.marked > index));
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
			{group(this.props.amount, 5).map(
				(x,i) =>
				<td
					className={[
						"Potential-Cell",
						this.props.marked > i ? "used-cell":undefined
					].join(" ")}
					onClick={(e) => this.markClick(e, i)}
					key={i}>
					{x}
				</td>)}
			</tr></tbody></table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	amount: state.potential.total,
	groupSize: state.potential.groupSize,
	marked: (state.potential.used / state.potential.groupSize) | 0
})

const mapDispatchToProps = { changePotential, markPotential }

export default connect(withCharacterState(mapStateToProps), mapDispatchToProps)(Potential);
