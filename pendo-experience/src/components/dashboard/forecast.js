import React from 'react';
import './dashboard.css';

import { Card } from 'antd';
import { 
	Line
} from 'react-chartjs-2';


// See https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components
// & http://www.chartjs.org/
let data = {
	labels: [
		'Week 1', 'Week 2', 'Week 3', 
		'Week 4', 'Week 5', 'Week 6',
		'Week 7', 'Week 8', 'Week 9', 
		'Week 10', 'Week 11', 'Week 12'
	],
	datasets: [
		{	
			label: "Forecast in $",
			data: [
				45000,
				98000,
				147000,
				265000,
				467000,
				487000,
				603000,
				1020000,
				1150000,
				1230000,
				1640000,
				2460000
			],
			backgroundColor: [
				'rgba(24, 144, 255, .6)'
			]
		}
	]
}


const Forecast = () => (
	<Card title="Forecast" id="metrics">
		<Line
			data={data}
			options={{
				maintainAspectRatio: false,
				legend: {
					display: false,
				},
				scales: {
					xAxes: [{
						gridLines: {
							display: false
						}
					}],
					yAxes: [{
						ticks: {
							// Include a dollar sign and commas in tickets
							callback: function(value, index,values) {
								return '$' + value.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')
							}
						}
					}]
				}
			}}
		/>
	</Card>
);


export default Forecast;
