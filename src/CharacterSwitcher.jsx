//@flow
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
