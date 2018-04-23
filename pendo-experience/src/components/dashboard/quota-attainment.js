import React from 'react';
import './dashboard.css';
import { Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
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
		       <CartesianGrid stroke="#f5f5f5"/>
		       <XAxis dataKey="name"/>
		       <YAxis/>
		       <Tooltip/>
		       <Bar dataKey="pv" stackId="a" fill="#1890ff" />
		       <Bar dataKey="uv" stackId="a" fill="#011529" />
      </BarChart>
    </ResponsiveContainer>
		</Card>
	);

export default QuoteAttainment;
