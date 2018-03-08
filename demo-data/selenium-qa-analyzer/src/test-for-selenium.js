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
	}



	// I gotta figure out how to get away with so many click handlers
	_handleOneClick(e) {
		this.setState({
			countOne: this.state.countOne + 1
		})
	}

	render() {
		return (
			<div>
				<button id="one" onClick={(e) => this._handleOneClick(e)}>BUTTON ONE</button>
				<br/>
				<button id="two">BUTTON TWO</button>
				<br/>
				<button id="three">BUTTON THREE</button>
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