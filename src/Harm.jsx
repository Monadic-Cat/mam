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
import { changeHarm } from './actions';
import { withCharacterState } from './store';

type Props = {
	amount: number,
	changeHarm: number => void
}

class Harm extends Component<Props> {
	handleClick = event => {
		switch (event.target.name) {
			case "increment":
				this.props.changeHarm(1);
				break;
			case "decrement":
				this.props.changeHarm(-1);
				break;
			default:
				console.log("Um.");
		}
	}
	render() {
		return (
			<div className="Harm">
				Harm:
					<button onClick={this.handleClick} name="increment">+</button>
					{this.props.amount}
					<button onClick={this.handleClick} name="decrement">-</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	amount: state.harm
})

const mapDispatchToProps = { changeHarm }

export default connect(withCharacterState(mapStateToProps), mapDispatchToProps)(Harm)
