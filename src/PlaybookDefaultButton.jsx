import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replaceLabels } from './actions';
import { withCharacterState } from './store';
import Playbooks from './playbooks';

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
