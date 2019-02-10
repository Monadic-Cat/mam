//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withCharacterState } from './store';
import './Labels.css';
import Label from './Label';

type Props = {

}

class Labels extends Component<{}> {
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
