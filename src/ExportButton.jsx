import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClipboardJS from 'clipboard';
import { store } from './store';
import makeSheet from './sheet';

console.log(ClipboardJS);

class ExportButton extends Component {
	constructor(props) {
		super(props);
		this.clipboard = new ClipboardJS('.exportButton', {
			text: () => makeSheet(this.props.state)
		});
	}
	handleClick = _ => {
		console.log(makeSheet(this.props.state));
	}
	render() {
		return (
			<input className="exportButton" type="button" onClick={this.handleClick} value="export" />
		);
	}
}

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)(ExportButton)
