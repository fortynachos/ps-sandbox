// Please delete this after we go through with the actual components later
import React from 'react';




export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countOne: 0,
			countTwo: 0,
			countThree: 0
		}

		this._handleOneClick = this._handleOneClick.bind(this);
		this._handleTwoClick = this._handleTwoClick.bind(this);
		this._handleThreeClick = this._handleThreeClick.bind(this);
	}


	// 
	// I gotta figure out how to get away with so many click handlers
	// 
	_handleOneClick(e) {
		this.setState({
			countOne: this.state.countOne + 1
		})
	}

	_handleTwoClick(e) {
		this.setState({
			countTwo: this.state.countTwo + 1
		})
	}

	_handleThreeClick(e) {
		this.setState({
			countThree: this.state.countThree + 1
		})
	}

	render() {
		return (
			<div>
				<button id="one" onClick={(e) => this._handleOneClick(e)}>BUTTON ONE</button>
				<br/>
				<button id="two" onClick={(e) => this._handleTwoClick(e)}>BUTTON TWO</button>
				<br/>
				<button id="three" onClick={(e) => this._handleThreeClick(e)}>BUTTON THREE</button>
				<br/>
				<p>Button One Clicks: {this.state.countOne}</p>
				<br/>
				<p>Button Two Clicks: {this.state.countTwo}</p>
				<br/>
				<p>Button Three Clicks: {this.state.countThree}</p>

			</div>
		);
	}
}