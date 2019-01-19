import React, { Component } from 'react';

class CharacterName extends Component {
	render() {
		return (
			<span><em>{this.props.name}</em></span>
		);
	}
}

export default CharacterName;
