import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCondition } from './actions';

class Condition extends Component {
	constructor(props) {
		super(props);
		this.state = {
			marked: false
		};
	}
	handleClick = () => {
		/*this.setState((state, props) => ({
			marked: !state.marked
		}));*/
		this.props.setCondition(this.props.name, !this.props.marked);
	}
	render() {
		return (
			<td
				className={"Condition" + (this.props.marked ? " marked-condition":"")}
				onClick={() => this.handleClick()}
			>
				{this.props.name}
			</td>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	let a = state.conditions[state.conditionOrder[ownProps.name]];
	return {
		marked: a.marked
	};
}
const mapDispatchToProps = { setCondition }

export default connect(mapStateToProps, mapDispatchToProps)(Condition)
