import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import { changeHarm } from './actions';

class HarmBox extends Component {
	render() {
		return (
			<input type="checkbox" />
		);
	}
}

class Harm extends Component {
	handleClick = event => {
		switch (event.target.name) {
			case "increment":
				this.props.changeHarm(1);
				break;
			case "decrement":
				this.props.changeHarm(-1);
				break;
			default:
				console.log("Um.");
		}
	}
	render() {
		return (
			<div className="Harm">
				Harm:
					<button onClick={this.handleClick} name="increment">+</button>
					{this.props.amount}
					<button onClick={this.handleClick} name="decrement">-</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	amount: state.harm
})

const mapDispatchToProps = { changeHarm }

export default connect(mapStateToProps, mapDispatchToProps)(Harm)
