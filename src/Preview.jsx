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
import makeSheet from 'madap/lib/sheet';
import { withCharacterState } from './store';

class PreviewPane extends Component {
	render() {
		return (
			<pre>
				{makeSheet(this.props.state)}
			</pre>
		);
	}
}

const mapStateToProps = state => ({ state });

export default connect(withCharacterState(mapStateToProps))(PreviewPane)
