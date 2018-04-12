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
		this.props.onDetailsLoad(url);
		this.props.onTitleChange('Details');
	}


	render() {
		return (
			<div className="details-container">
			 		<Card loading={this.props.loading} title="Quick Information" id="quick-info">
						<p>
							<img src={this.props.quickInfo[0].picture.large} alt="pic"></img>
						</p>
			 			<p>
							{
								this.props.quickInfo[0].name.first.charAt(0).toUpperCase() + this.props.quickInfo[0].name.first.slice(1) +
								' ' +
								this.props.quickInfo[0].name.last.charAt(0).toUpperCase() + this.props.quickInfo[0].name.last.slice(1)
							}
						</p>
			 		</Card>
			 		<Card loading={this.props.loading} title="Additional Information" id="additional-info">
			 			<p>
			 				{this.props.quickInfo[0].location.street}
			 			</p>
			 			<p>
			 				{this.props.quickInfo[0].cell}
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

// const Details = ({inputValue, onDetailsSubmit, onDetailsChange,timelinePosts}) => (
// 	<div className="details-container">
// 		<Card title="Quick Information" id="quick-info">
// 			<p>
// 				Picture
// 			</p>
// 			<p>
// 				Name
// 			</p>
// 		</Card>
// 		<Card title="Additional Information" id="additional-info">
// 			<p>
// 				Address:
// 			</p>
// 			<p>
// 				Phone:
// 			</p>
// 			<p>
// 				Role:
// 			</p>
// 		</Card>
// 		<Tabs
// 			defaultActiveKey="1"
// 			d="entry-tabs"
// 			type="card"
// 			tabBarExtraContent={
// 				<Button onClick={() => {
// 					let activeTabHTML = document.getElementsByClassName('ant-tabs-tab-active')[0].innerHTML;
// 					onDetailsSubmit(activeTabHTML, inputValue);
// 				}}>
// 					Submit
// 				</Button>
// 			}
// 		>
// 			{
// 				tabsArray.map(tab => {
// 					return (
// 						<TabPane tab={tab.tab} key={tab.key}>
// 							<TextArea
// 								rows={4}
// 								className="timeline-entry"
// 								value={inputValue}
// 								onChange={e => onDetailsChange(e.target.value)}
// 							/>
// 						</TabPane>
// 						);
// 				})
// 			}
// 		</Tabs>
// 		<Timeline>
// 			{timelinePosts.map(item => {
// 					return <Timeline.Item key={item.key} dot={<Icon type={item.type} />}>{item.entry}</Timeline.Item>
// 					}
// 				)
// 			}
// 		 </Timeline>
// 	</div>
// 	);
//
//
// export default Details;
