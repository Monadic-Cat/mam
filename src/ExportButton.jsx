//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClipboardJS from 'clipboard';
import makeSheet from './sheet';
import type { CharacterState } from './types';

type Props = {
	state: CharacterState
}

class ExportButton extends Component<Props> {
	clipboard: mixed; // I don't really know this thing's structure, and I don't really care.
	constructor(props) {
		super(props);
		this.clipboard = new ClipboardJS('.clipboardButton');
	}
	render() {
		return (
			<input
				className="clipboardButton"
				type="button"
				value="export"
				data-clipboard-text={makeSheet(this.props.state)}
			/>
		);
	}
}

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)(ExportButton)
