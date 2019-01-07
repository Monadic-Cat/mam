import React, { Component } from 'react';
import { range } from 'lodash';
import './Labels.css';

class LabelCell extends Component {
	onhover = (e) => {
		if(!this.props.selected) e.target.classList.add("selected-cell");
	}
	onhoveroff = (e) => {
		if(!this.props.selected) e.target.classList.remove("selected-cell");
	}
	render() {
		return (
			<td className={"Label-Cell" + (this.props.selected ? " selected-cell":"")}
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
			selected: null
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

class Labels extends Component {
	render() {
		return (
			<div className="Labels">
			<table>
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

