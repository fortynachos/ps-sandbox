import React from 'react';
import './dashboard.css';
import { Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';






const Pipeline = ({pipelineData}) => (

		<Card title="Pipeline" id="forecast">
		<ResponsiveContainer width="96%" height="80%">
		<BarChart
			data={pipelineData}
            margin={{
            	top: 15, right: 0, left: 30, bottom: 0
            }}
            layout="vertical"
            barCategoryGap="0%"
            stackOffset='wiggle'
            >
       <CartesianGrid stroke="#f5f5f5"/>
       <XAxis type="number"/>
       <YAxis dataKey="name" type="category"/>
       <Tooltip/>
       <Bar dataKey="value" fill="#79c7e3" />
      </BarChart>
		</ResponsiveContainer>
		</Card>
	);


export default Pipeline;
