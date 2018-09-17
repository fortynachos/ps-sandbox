import React from 'react';
import './details.css';
import { Card, Tabs, Input, Button, Timeline, Icon } from 'antd';


//Logos to be used
import BlueWingLogo from './imgs/bluewing_logo.png';
import CloudLogo from './imgs/cloud_logo.png';
import GoldWaveLogo from './imgs/goldwave_logo.png';
import HexLogo from './imgs/hex_logo.png';
import SpiralLogo from './imgs/spiral_logo.png';
import WLogo from './imgs/w_logo.png';
import XLogo from './imgs/x_logo.png';
import SunLogo from './imgs/sun_logo.png';
import PlaceholderLogo from './imgs/200x200.png';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;


// After a random number from 1-8 is generated this designates which Logo to use
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



// Places the right field objects depending on what /account/contact/opp we are in
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

// Object to render the tabs on the Note taking portion
const tabsArray = [
	{
		tab: "New Note",
		key: "1",
        id: 'new-note'
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

// Evals the proper object syntax depending on what we are looking (acc/cont/opp)
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

// Initiate localStorageCheck variable
var localStorageCheck;
// Get LocaStorage Object if it exists and turn JSON to obj
if (localStorage.getItem('addNewFormData')) {
	localStorageCheck = true;
	var addNewFormData = Object.assign({},JSON.parse(localStorage.getItem('addNewFormData')));
	localStorage.clear();
} else {
	localStorageCheck = false;
}

let logoNum;
let fieldIdentifier;

// TURN THIS OFF DURING DEVELOPMENT!

/* eslint-disable */
export default class Details extends React.Component {
	// When component mounts run this initiation process
	componentWillMount() {
		// Get pathname and separate into an object to name the string broken down and usable
		let detailsURLPage = document.location.pathname.split('/');

		// Find out whether we are in accounts/contacts/opps
		fieldIdentifier = detailsURLPage[1].toUpperCase();

		// Check to see if the URL contains "new" (indicates that ADD NEW was used)
		// If not then load the details based off the URL
		let url = document.location.pathname;
		if (!url.includes("new")) {
			this.props.onDetailsLoad(url);
		}

		// Get random number 1-8
		logoNum = String(Math.floor(Math.random() * 8));

		//Change Page Title to Details
		this.props.onPageUpdate('Details');
	}


	render() {
		return (
			<div className="details-container">
			 		<Card loading={ (localStorageCheck)  ? false : this.props.loading} title="Quick Information" id="quick-info">
			 			{(fieldIdentifier == "CONTACTS") ? (
			 				<img src={(localStorageCheck) ? PlaceholderLogo : this.props.info.photo} alt="pic" id="details-pic"></img>
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
							<Button id="submit-btn" onClick={() => {
								// Get the active tab and send to on details submit to place the write icon in the Timeline
								let activeTabHTML = document.getElementsByClassName('ant-tabs-tab-active')[0].innerHTML;
								this.props.onDetailsSubmit(activeTabHTML, this.props.inputValue);
							}}>
								Submit
							</Button>
						}
					>
						{
							// tabs display
							tabsArray.map(tab => {
								return (
									<TabPane tab={tab.tab} key={tab.key} id={tab.id} className={tab.id}>
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
						{
							// Get timeline object and display on page
							this.props.timelinePosts.map(item => {
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
