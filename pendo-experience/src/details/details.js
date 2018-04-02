import React from 'react';
import './details.css';
import { Card, Tabs, Input, Button, Timeline } from 'antd';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;
const TimelineItem = Timeline.item;
/*
	- Then use timeline as the bottom right part
			SOEMTHING IS BREAKING HERE



	- Use some sort of input box for the top
	with tabs
	- should be simple
*/



const Details = () => (
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
		<Tabs defaultActiveKey="2" id="entry-tabs" type="card" tabBarExtraContent={<Button>Submit</Button>}>
			<TabPane tab="New Note" key="1">
				<TextArea rows={4} />
			</TabPane>
			<TabPane tab="Email" key="2">Content of Tabe Pane 1</TabPane>
			<TabPane tab="Call" key="3">Content of Tabe Pane 1</TabPane>
			<TabPane tab="Log Activity" key="4">Content of Tabe Pane 1</TabPane>
			<TabPane tab="Create Task" key="5">Content of Tabe Pane 1</TabPane>
			<TabPane tab="Schedule" key="6">Content of Tabe Pane 1</TabPane>
		</Tabs>
	</div>
	);


export default Details;

		// <Timeline>
		// 	<Timeline.item>asdfasdf</Timeline.item>
		// 	<Timeline.item>asdf</Timeline.item>
		// 	<Timeline.item>asdf</Timeline.item>
		// 	<Timeline.item>asfd</Timeline.item>
		// 	<Timeline.item>asd</Timeline.item>
		// </Timeline>