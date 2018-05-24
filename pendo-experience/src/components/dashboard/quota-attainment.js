import React from 'react';
import './dashboard.css';
import { Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


const data = [
      {name: 'James', attained: 160000, target: 240000},
      {name: 'Hannah', attained: 120000, target: 140000},
      {name: 'Sarah', attained: 90000, target: 200000,},
      {name: 'Adam', attained: 210000, target: 300000},
      {name: 'Lincoln', attained:35000,target: 115000}
];


const QuoteAttainment = () => (

		<Card title="Quota Attainment" id='quota'>
    <ResponsiveContainer width="100%" height="85%">
			<BarChart
				width={270}
				height={225}
				data={data}
            	margin={{
            		top: 15, right: 15, left: 0, bottom: 15
            	}}
            	>
		       <CartesianGrid stroke="#ddd" vertical={false}/>
		       <XAxis dataKey="name"/>
		       <YAxis/>
           <Tooltip/>
		       <Bar dataKey="attained" stackId="a" fill="#1890ff" />
		       <Bar dataKey="target" stackId="a" fill="#011529" />
      </BarChart>
    </ResponsiveContainer>
		</Card>
	);

export default QuoteAttainment;
