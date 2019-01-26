import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClipboardJS from 'clipboard';
import makeSheet from './sheet';

class ExportButton extends Component {
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
