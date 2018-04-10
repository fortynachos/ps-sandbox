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


const Details = ({inputValue, onDetailsSubmit, onDetailsChange,timelinePosts}) => (
	<div className="details-container">
		<Card title="Quick Information" id="quick-info">
			<p>
				Picture
			</p>
			<p>
				Name
			</p>
		</Card>
		<Card title="Additional Information" id="additional-info">
			<p>
				Address:
			</p>
			<p>
				Phone:
			</p>
			<p>
				Role:
			</p>
		</Card>
		<Tabs 
			defaultActiveKey="1" 
			d="entry-tabs" 
			type="card"
			tabBarExtraContent={
				<Button onClick={() => {
					let activeTabHTML = document.getElementsByClassName('ant-tabs-tab-active')[0].innerHTML;
					onDetailsSubmit(activeTabHTML, inputValue);
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
								rows={4} 
								className="timeline-entry" 
								value={inputValue} 
								onChange={e => onDetailsChange(e.target.value)}
							/>
						</TabPane>
						);
				})
			}
		</Tabs>
		<Timeline>
			{timelinePosts.map(item => {
					return <Timeline.Item key={item.key} dot={<Icon type={item.type} />}>{item.entry}</Timeline.Item>
					}
				)
			}
		 </Timeline>
	</div>
	);


export default Details;