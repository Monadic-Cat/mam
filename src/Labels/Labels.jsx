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
import { withCharacterState } from '../store';
import type { LabelDict, CharacterState } from '../types';
import './Labels.sass';
import Label from './Label';

type Props = {
	labels: LabelDict
}

class Labels extends Component<Props> {
	render() {
		return (
			<div>
			<table className="Labels">
			<tbody>
				{this.props.labels.elements.map(
					x => <Label name={x.name} key={x.name} />
				)}
			</tbody></table>
			</div>
		);
	}
}

const mapStateToProps = ({labels}) => ({
	labels
})

export default connect(withCharacterState(mapStateToProps))(Labels);
