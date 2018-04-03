import React from 'react';
import './dashboard.css';
import { Card } from 'antd';
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	HorizontalBarSeries
} from 'react-vis';

const QuoteAttainment = () => (

		<Card title="Quota Attainment" extra={<a>More</a>}>
			<XYPlot
				width={250}
				height={200}
				stackBy="x"
			>
				<VerticalGridLines />
				<HorizontalGridLines />
				<XAxis />
				<YAxis />
				 <HorizontalBarSeries
		            data={[
		              {y: 2, x: 10},
		              {y: 4, x: 5},
		              {y: 5, x: 15}
		            ]}
		          />
		          <HorizontalBarSeries
		            data={[
		              {y: 2, x: 12},
		              {y: 4, x: 2},
		              {y: 5, x: 11}
		            ]}
		           />
		          </XYPlot>
		</Card>
	);	

export default QuoteAttainment;