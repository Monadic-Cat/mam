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
import { switchCharacter } from './actions';
import type { SWITCH_CHARACTER_OPTION } from './actions';

type Props = {
	selectedCharacter: number,
	switchCharacter: SWITCH_CHARACTER_OPTION => void
}

class CharacterSwitcher extends Component<Props> {
	handleClick = event => {
		this.props.switchCharacter(event.target.name);
	}
	render() {
		return <div> Character Slot:
			<button onClick={this.handleClick} name="FORWARD">+</button>
			{this.props.selectedCharacter}
			<button onClick={this.handleClick} name="BACKWARD">-</button>
		</div>;
	}
}

const mapStateToProps = ({selectedCharacter}) => ({ selectedCharacter })
const mapDispatchToProps = { switchCharacter }

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSwitcher);
