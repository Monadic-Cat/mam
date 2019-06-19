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
import { setName, setPowers } from './actions';
import { withCharacterState } from './store';
import PlaybookDefaultButton from './PlaybookDefaultButton';
import Playbooks from 'madap/lib/playbooks';

/*
<textarea name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
*/
/*
<textarea onInput={() => {this.style.height = "";this.style.height = this.scrollHeight + "px"}}></textarea>
*/

type PowerProps = {
	name: string,
	value: string,
	setPowers: string => void
}

class Powers extends Component<PowerProps> {
	handleChange = event => {
		this.props.setPowers(event.target.value);
	}
	render() {
		return (
			<textarea
				onChange={this.handleChange}
				value={this.props.value}
				name={this.props.name}
			/>
		);
	}
}

type NameProps = {
	player: string,
	name: string,
	heroName: string,
	playbook: string,
	powers: string,
	setName: (string, string) => void,
	setPowers: string => void
}

class CharacterNames extends Component<NameProps> {
	handleChange = event => {
		this.props.setName(event.target.value, event.target.name);
	}
	render() {
		return (
			<>
			<table>
				<tbody>
				<tr>
					<td>Player Name:</td>
					<td>
						<input
							onChange={this.handleChange}
							value={this.props.player}
							name="player"
						/>
					</td>
				</tr>
				<tr>
					<td>Character Name:</td>
					<td>
						<input
							onChange={this.handleChange}
							value={this.props.name}
							name="char"
						/>
					</td>
				</tr>
				<tr>
					<td>Hero Name:</td>
					<td>
						<input
							onChange={this.handleChange}
							value={this.props.heroName}
							name="hero"
						/>
					</td>
				</tr>
				<tr>
					<td>Playbook:</td>
					<td>
						<input
							onChange={this.handleChange}
							value={this.props.playbook}
							name="playbook"
							list="playbooks"
						/>
						<datalist id="playbooks">
							{Object.keys(Playbooks()).map(x => <option key={x}> {x} </option>)}
						</datalist>
						<PlaybookDefaultButton />
					</td>
				</tr>
				<tr>
					<td>Powers/Abilities:</td>
					<td>
						<Powers
							value={this.props.powers}
							name="powers"
							setPowers={this.props.setPowers}
						/>
					</td>
				</tr>
				</tbody>
			</table>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		player: state.player,
		name: state.name,
		heroName: state.heroName,
		playbook: state.playbook,
		powers: state.powers
	};
}

const mapDispatchToProps = { setName, setPowers }

export default connect(withCharacterState(mapStateToProps), mapDispatchToProps)(CharacterNames)
