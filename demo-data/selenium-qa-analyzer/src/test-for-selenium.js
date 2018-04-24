// Please delete this after we go through with the actual components later
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


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
			<section>
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
				<LineChart width={600} height={300} data={
					[
						{name: "Day 1", uv: this.state.countOne },
						{name: "Day 2", uv: this.state.countTwo },
						{name: "Day 3", uv: this.state.countThree }
					]
				}>
					<XAxis dataKey="name"/>
					<YAxis/>
					<CartesianGrid strokeDasharray="3 3"/>
					<Tooltip/>
					<Legend />
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>
			</section>
		);
	}
}
