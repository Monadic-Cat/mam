import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName } from './actions';

class CharacterName extends Component {
	handleChange = event => {
		this.props.setName(event.target.value, event.target.name);
	}
	render() {
		return (
			<>
			<span>Player Name:
				<input
					onChange={this.handleChange}
					value={this.props.player}
					name="player"
				/>
			</span>
			<br/>
			<span>Character Name:
				<input
					onChange={this.handleChange}
					value={this.props.name}
					name="char"
				/>
			</span>
			<br/>
			<span>Hero Name:
				<input
					onChange={this.handleChange}
					value={this.props.heroName}
					name="hero"
				/>
			</span>
			</>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		player: state.player,
		name: state.name,
		heroName: state.heroName
	};
}

const mapDispatchToProps = { setName }

export default connect(mapStateToProps, mapDispatchToProps)(CharacterName)
