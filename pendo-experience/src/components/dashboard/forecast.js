import React from 'react';
import './dashboard.css';
import { Card } from 'antd';
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	VerticalGridLines,
	LineSeries
} from 'react-vis';




const Forecast = () => (

		<Card title="Forecast" extra={<a>More</a>} id="forecast">
			<XYPlot
				width={250}
				height={200}
			>
				<HorizontalGridLines />
				<VerticalGridLines />
				<YAxis/>
				<XAxis />
				<LineSeries
				className="third-series"
				curve={'curveMonotoneX'}
				style={{
				strokeDasharray: '2 2'
				}}
				data={[
				{x: 1, y: 10},
				{x: 2, y: 4},
				{x: 3, y: 2},
				{x: 4, y: 15}
				]}
				strokeDasharray="7, 3"
				/>
			</XYPlot>
		</Card>
	);


export default Forecast;