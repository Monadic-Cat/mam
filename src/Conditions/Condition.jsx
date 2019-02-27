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
