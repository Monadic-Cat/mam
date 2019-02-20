//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import { setLabel } from './actions';
import type { CharacterState } from './types';
import { withCharacterState } from './store';

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
				onMouseOver={this.onhover}
				onMouseOut={this.onhoveroff}
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
