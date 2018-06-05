import React from 'react';
import './dashboard.css';

import { Card } from 'antd';
import { 
	Line
} from 'react-chartjs-2';


// const data = [{name: 'Week 1', goal: 50000, actual: 45000},
//               {name: 'Week 2', goal: 90000, actual: 98000},
//               {name: 'Week 3', goal: 145000, actual: 147000},
//               {name: 'Week 4', goal: 250000, actual: 265000},
//               {name: 'Week 5', goal: 500000, actual: 467000},
//               {name: 'Week 6', goal: 600000, actual: 489000},
//               {name: 'Week 7', goal: 700000, actual: 603000},
//               {name: 'Week 8', goal: 1100000, actual: 1020000},
//               {name: 'Week 9', goal: 1230000, actual: 1150000},
//               {name: 'Week 10', goal: 1500000, actual: 1230000, projection: 1230000},
//               {name: 'Week 11', goal: 1700000, projection: 1640000},
//               {name: 'Week 12', goal: 2340000, projection: 2460000}
// ];



/*
      if you change the value above to an array it will create a centered graph. Use the largest value as 100%.
      Then just compute a centroid and a range from there on

*/

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
