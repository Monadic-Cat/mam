import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import { setLabel } from './actions';

class LabelCell extends Component {
	onhover = (e) => {
		if(!this.props.selected) e.target.classList.add("selected-cell");
	}
	onhoveroff = (e) => {
		if(!this.props.selected) e.target.classList.remove("selected-cell");
	}
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

class Label extends Component {
	handleClick = (n) => {
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

const mapStateToProps = (state, ownProps) => {
	//Get this label from state.
	let a = state.labels.elements[state.labels.order[ownProps.name]];
	return {
		selected: a.value
	};
}
const mapDispatchToProps = { setLabel }

export default connect(mapStateToProps, mapDispatchToProps)(Label)
