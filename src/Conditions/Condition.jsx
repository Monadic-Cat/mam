//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCondition } from '../actions';
import { withCharacterState } from '../store';

type Props = {
	name: string,
	marked: boolean,
	setCondition: (string, boolean) => void
}

class Condition extends Component<Props> {
	handleClick = () => {
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

const mapStateToProps = (state, ownProps: Props) => {
	let a = state.conditions.elements[state.conditions.order[ownProps.name]];
	return {
		...ownProps,
		marked: a.marked
	};
}
const mapDispatchToProps = { setCondition }

export default connect(withCharacterState(mapStateToProps), mapDispatchToProps)(Condition)
