import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import { SET_LABEL } from './actions';

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
	constructor(props) {
		super(props);
		this.state = {
			selected: props.selected.value
		};
	}
	handleClick = (n) => {
		this.setState({
			selected: n
		});
	}
	render() {
		return (
			<tr className="Label">
			<td> {this.props.name} </td>
			{
				range(-2, 4).map(
					x =>
						<LabelCell
							selected={this.state.selected === x} key={x}
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

const mapStateToProps = (state, ownProps) => ({
		selected: state.labels[state.labelOrder[ownProps.name]]
})
const mapDispatchToProps = { SET_LABEL }

export default connect(mapStateToProps, mapDispatchToProps)(Label)
