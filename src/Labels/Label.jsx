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
import { setLabel } from '../actions';
import type { CharacterState } from '../types';
import { withCharacterState } from '../store';

type CellProps = {
	selected: boolean,
	onClick: void => void,
	children: number
}

class LabelCell extends Component<CellProps> {
	render() {
		return (
			<td
				className={"Label-Cell" + (this.props.selected ? " selected-cell":"")}
				onClick = {this.props.onClick}
			>
				{this.props.children}
			</td>
		);
	}
}

type LabelProps = {
	name: string,
	selected: number,
	setLabel: (string, number) => void
}

class Label extends Component<LabelProps> {
	handleClick = (n: number) : void => {
		this.props.setLabel(this.props.name, n);
		//this.props.dispatch(setLabel(this.props.name, n))
	}
	render() {
		return (
			<tr className="Label">
			<td> {this.props.name} </td>
			{
				range(-2, 4).map(
					x =>
						<LabelCell
							selected={this.props.selected === x} key={x}
							onClick={() => this.handleClick(x)}
						>
							{x}
						</LabelCell>
				)
			}
			</tr>
		);
	}
}

const mapStateToProps = (state: CharacterState, ownProps: LabelProps) => {
	//Get this label from state.
	let a = state.labels.elements[state.labels.order[ownProps.name]];
	return {
		...ownProps,
		selected: a.value
	};
}
const mapDispatchToProps = { setLabel }

export default connect(withCharacterState(mapStateToProps), mapDispatchToProps)(Label)
