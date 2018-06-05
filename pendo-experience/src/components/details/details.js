import React from 'react';
import './details.css';
import { Card, Tabs, Input, Button, Timeline, Icon } from 'antd';

import BillBinch from './imgs/BillBinch-Avatar-PNG.png';

//Logos to be used
import BlueWingLogo from './imgs/bluewing_logo.png';
import CloudLogo from './imgs/cloud_logo.png';
import GoldWaveLogo from './imgs/goldwave_logo.png';
import HexLogo from './imgs/hex_logo.png';
import SpiralLogo from './imgs/spiral_logo.png';
import WLogo from './imgs/w_logo.png';
import XLogo from './imgs/x_logo.png';
import SunLogo from './imgs/sun_logo.png';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;



const LogoObject = {
	"1": BlueWingLogo,
	"2": CloudLogo,
	"3": GoldWaveLogo,
	"4": HexLogo,
	"5": SpiralLogo,
	"6": WLogo,
	"7": XLogo,
	"8": SunLogo
};


/*
	Type in New note and add to Timeline Item
*/

const fieldTwoList = {
	"ACCOUNTS": "Rep: ",
	"CONTACTS": "Email: ",
	"OPPORTUNITIES": "Contact: "
}

const fieldThreeList = {
	"ACCOUNTS": "Territory: ",
	"CONTACTS": "Phone #: ",
	"OPPORTUNITIES": "ARR: "
}

const tabsArray = [
	{
		tab: "New Note",
		key: "1"
	},
	{
		tab: "Email",
		key: "2"
	},
	{
		tab: "Call",
		key: "3"
	},
	{
		tab: "Log Activity",
		key: "4"
	},
	{
		tab: "Create Task",
		key: "5"
	},
	{
		tab: "Schedule",
		key: "6"
	},
]

const propsEnum = {
	"ACCOUNTS": {
		"firstField": "this.props.info.name",
		"secondField": "this.props.info.rep",
		"thirdField": "this.props.info.territory"
	},
	"CONTACTS": {
		"firstField": "this.props.info.name",
		"secondField": "this.props.info.email",
		"thirdField": "this.props.info.phone"
	},
	"OPPORTUNITIES": {
		"firstField": "this.props.info.name",
		"secondField": "this.props.info.contact",
		"thirdField": "this.props.info.arr"
	},
}

console.log(propsEnum["CONTACTS"]["secondField"])
var localStorageCheck;
// Get LocaStorage Object if it exists and turn JSON to obj
if (localStorage.getItem('addNewFormData')) {
	localStorageCheck = true;
	var addNewFormData = Object.assign({},JSON.parse(localStorage.getItem('addNewFormData')));
	console.log(addNewFormData);
	localStorage.clear();
} else {
	localStorageCheck = false;
}

let logoNum;
let fieldIdentifier;
/* eslint-disable */
export default class Details extends React.Component {
	componentWillMount() {
		let detailsURLPage = document.location.pathname.split('/');
		fieldIdentifier = detailsURLPage[1].toUpperCase();

		let url = document.location.pathname;
		if (!url.includes("new")) {
			this.props.onDetailsLoad(url);
		}

		logoNum = String(Math.floor(Math.random() * 8));
		this.props.onPageUpdate('Details');
	}


	render() {
		return (
			<div className="details-container">
			 		<Card loading={ (localStorageCheck)  ? false : this.props.loading} title="Quick Information" id="quick-info">
			 			{(fieldIdentifier == "CONTACTS") ? (
			 				<img src={BillBinch} alt="pic" id="details-pic"></img>
			 				) : (
			 				<img src={LogoObject[logoNum]} alt="pic" id="details-pic"></img>	
			 				)
			 			}
						<p>
							<strong>Name: </strong> { (localStorageCheck) ? addNewFormData.fieldOne : eval(propsEnum[fieldIdentifier]["firstField"])} 
						</p>
			 		</Card>
			 		<Card loading={ (localStorageCheck) ? false : this.props.loading } title="Additional Information" id="additional-info">

						<p>
			 				<strong>{ fieldTwoList[fieldIdentifier] }</strong> { (localStorageCheck) ? addNewFormData.fieldTwo : eval(propsEnum[fieldIdentifier]["secondField"]) }
			 			</p>
			 			<p>
			 				<strong>{ fieldThreeList[fieldIdentifier] }</strong> {(localStorageCheck) ? addNewFormData.fieldThree : eval(propsEnum[fieldIdentifier]["thirdField"])} 
			 			</p>
						

			 		</Card>
			 		<Tabs
						defaultActiveKey="1"
						d="entry-tabs"
						type="card"
						tabBarExtraContent={
							<Button onClick={() => {
								let activeTabHTML = document.getElementsByClassName('ant-tabs-tab-active')[0].innerHTML;
								this.props.onDetailsSubmit(activeTabHTML, this.props.inputValue);
							}}>
								Submit
							</Button>
						}
					>
						{
							tabsArray.map(tab => {
								return (
									<TabPane tab={tab.tab} key={tab.key}>
										<TextArea
											rows={6}
											className="timeline-entry"
											value={this.props.inputValue}
											onChange={e => this.props.onDetailsChange(e.target.value)}
										/>
									</TabPane>
									);
							})
						}
					</Tabs>
					<Timeline>
						{this.props.timelinePosts.map(item => {
								return <Timeline.Item key={item.key} dot={<Icon type={item.type} />}>{item.entry}</Timeline.Item>
								}
							)
						}
					 </Timeline>
				</div>
		)
	}
}

/* eslint-enable */
