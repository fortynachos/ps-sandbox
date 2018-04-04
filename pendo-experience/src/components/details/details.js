import React from 'react';
import './details.css';
import { Card, Tabs, Input, Button, Timeline, Icon } from 'antd';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;

/*
	Type in New note and add to Timeline Item
*/



const Details = ({inputValue, onDetailsSubmit}) => (
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
				<Button onClick={() => console.log(inputValue)}>
					Submit
				</Button>
			}
		>
			<TabPane tab="New Note" key="1">
				<TextArea rows={4} onChange={e => onDetailsSubmit(e.target.value)}/>
			</TabPane>
			<TabPane tab="Email" key="2">
				<TextArea rows={4} />
			</TabPane>
			<TabPane tab="Call" key="3">
				<TextArea rows={4} />
			</TabPane>
			<TabPane tab="Log Activity" key="4">
				<TextArea rows={4} />
			</TabPane>
			<TabPane tab="Create Task" key="5">
				<TextArea rows={4} />
			</TabPane>
			<TabPane tab="Schedule" key="6">
				<TextArea rows={4} />
			</TabPane>
		</Tabs>
		<Timeline>
		 	<Timeline.Item dot={<Icon type="form" />}>Thing 1</Timeline.Item>
		 	<Timeline.Item dot={<Icon type="mail" />}>Thing 2</Timeline.Item>
		 	<Timeline.Item dot={<Icon type="phone" />}>Thing 3</Timeline.Item>
		 	<Timeline.Item dot={<Icon type="tool" />}>Thing 4</Timeline.Item>
		 	<Timeline.Item dot={<Icon type="check-circle-o" />}>Thing 5 </Timeline.Item>
		 	<Timeline.Item dot={<Icon type="calendar" />}>Thing 6</Timeline.Item>
		 </Timeline>
	</div>
	);


export default Details;