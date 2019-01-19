import React, { Component } from 'react';
import ClipboardJS from 'clipboard';

console.log(ClipboardJS);

class ExportButton extends Component {
	render() {
		return (
			<input type="button" value="export" />
		);
	}
}

export default ExportButton;

