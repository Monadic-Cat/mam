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
import { replaceLabels } from './actions';
import { withCharacterState } from './store';
import Playbooks from 'madap/lib/playbooks';

class PlaybookDefaultButton extends Component {
	handleClick = event => {
		let playbooks = Playbooks();
		if(this.props.playbook in playbooks) {
			let labels = playbooks[this.props.playbook].defaults;
			this.props.replaceLabels(labels);
		}
	}
	render() {
		return <input onClick={this.handleClick} type="button" value="Reset Labels"/>
	}
}

const mapStateToProps = ({ playbook }) => ({ playbook })
const mapDispatchToProps = { replaceLabels }

export default connect(
	withCharacterState(mapStateToProps), mapDispatchToProps)
	(PlaybookDefaultButton);
