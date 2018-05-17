import React from 'react';
import './details.css';
import { Card, Tabs, Input, Button, Timeline, Icon } from 'antd';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;

/*
	Type in New note and add to Timeline Item
*/

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


export default class Details extends React.Component {
	componentWillMount() {
		let url = document.location.pathname;
		console.log(url);
		if (!url.includes("new")) {
			this.props.onDetailsLoad(url);
		}

		this.props.onPageUpdate('Details');
	}


	render() {
		return (
			<div className="details-container">
			 		<Card loading={(localStorage.getItem('loading')) ? false : this.props.loading} title="Quick Information" id="quick-info">
			 			<img src="http://via.placeholder.com/100x100" alt="pic" id="details-pic"></img>
						<p>
							<strong>Name: </strong>{ (localStorage.getItem('Name')) ? localStorage.getItem('Name') : this.props.info.name}
						</p>
			 		</Card>
			 		<Card loading={(localStorage.getItem('loading')) ? false : this.props.loading} title="Additional Information" id="additional-info">

						<p>
			 				<strong>Account: </strong> {
			 					 localStorage.getItem('ObjectType') === 'Accounts' ? (
			 					 	localStorage.getItem('Name')
			 					 ) : (
			 					 	this.props.info.account
			 					 )
			 				}
			 			</p>
			 			<p>
			 				<strong>Email: </strong> {
			 					 localStorage.getItem('Name') ? (
			 					 	localStorage.getItem('Email')
			 					 ) : (
			 					 	this.props.info.email
			 					 )
			 				}
			 			</p>
						<p>
			 				<strong>Phone: </strong> {
			 					 localStorage.getItem('Name') ? (
			 					 	localStorage.getItem('Phone')
			 					 ) : (
			 					 	this.props.info.phone
			 					 )
			 				}
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
