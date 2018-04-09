import React from 'react';
import './dashboard.css';
import { Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';






const Pipeline = ({pipelineData}) => (

		<Card title="Pipeline" extra={<a>More</a>} id="forecast">
		<BarChart 
			width={270} 
            height={225} 
			data={pipelineData}
            margin={{
            	top: 0, right: 5, left: 30, bottom: 5
            }}
            layout="vertical"
            barCategoryGap="0%"
            stackOffset='wiggle'
            >
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis type="number"/>
       <YAxis dataKey="name" type="category"/>
       <Tooltip/>
       <Bar dataKey="value" fill="#79c7e3" />
      </BarChart>
		</Card>
	);


export default Pipeline;