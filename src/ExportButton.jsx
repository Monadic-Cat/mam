import React, { Component } from 'react';
import ClipboardJS from 'clipboard';
import { store } from './store';
import makeSheet from './sheet';

console.log(ClipboardJS);

class ExportButton extends Component {
	handleClick = _ => {
		console.log(makeSheet(store.getState()));
	}
	render() {
		return (
			<input type="button" onClick={this.handleClick} value="export" />
		);
	}
}

export default ExportButton;
