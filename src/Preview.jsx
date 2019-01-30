import React, { Component } from 'react';
import { connect } from 'react-redux';
import makeSheet from './sheet';

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

export default connect(mapStateToProps)(PreviewPane)
