//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withCharacterState } from './store';
import type { OrderedDict, LabelState, CharacterState } from './types';
import './Labels.css';
import Label from './Label';

type Props = {
	labels: OrderedDict<string, LabelState>
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
