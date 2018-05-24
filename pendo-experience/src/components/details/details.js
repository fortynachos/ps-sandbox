import React from 'react';
import './details.css';
import { Card, Tabs, Input, Button, Timeline, Icon } from 'antd';
import BillBinch from './BillBinch-Avatar-PNG.png';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;

/*
	Type in New note and add to Timeline Item
*/

const fieldTwoList = {
	"accounts": "Rep: ",
	"contacts": "Email: ",
	"opportunities": "Contact: "
}

const fieldThreeList = {
	"accounts": "Territory: ",
	"contacts": "Phone #: ",
	"opportunities": "ARR: "
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

let detailsURLPage = document.location.pathname.split('/');
let fieldIdentifier = detailsURLPage[1];


export default class Details extends React.Component {
	componentWillMount() {
		let url = document.location.pathname;
		if (!url.includes("new")) {
			this.props.onDetailsLoad(url);
		}

		this.props.onPageUpdate('Details');
	}


	render() {
		return (
			<div className="details-container">
			 		<Card loading={(localStorage.getItem('loading')) ? false : this.props.loading} title="Quick Information" id="quick-info">
			 			<img src={BillBinch} alt="pic" id="details-pic"></img>
						<p>
							<strong>Name: </strong>
						</p>
			 		</Card>
			 		<Card loading={(localStorage.getItem('loading')) ? false : this.props.loading} title="Additional Information" id="additional-info">

						<p>
			 				<strong>{ fieldTwoList[fieldIdentifier] }</strong>
			 			</p>
			 			<p>
			 				<strong>{ fieldThreeList[fieldIdentifier] } </strong>
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
