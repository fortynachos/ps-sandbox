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
		this.props.onDetailsLoad(url);
		this.props.onTitleChange('Details');
	}


	render() {
		return (
			<div className="details-container">
			 		<Card loading={this.props.loading} title="Quick Information" id="quick-info">
						<p>

						</p>
			 			<img src={this.props.additionalInfo.photo} alt="pic"></img>
			 		</Card>
			 		<Card loading={this.props.loading} title="Additional Information" id="additional-info">
			 			<p>
			 				{this.props.quickInfo.key}
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
