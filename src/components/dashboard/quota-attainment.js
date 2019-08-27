import React from 'react';
import './dashboard.css';
import { Card } from 'antd';

import {
  Bar
} from 'react-chartjs-2';

// See https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components
// & http://www.chartjs.org/
const data = {
  labels: ['Mona', 'Felix', 'Jess', 'Ravi', 'Kam', 'Walter'],
  datasets: [
    {
      label: 'Attained',
      backgroundColor: 'rgba(24, 144, 255, .6)',
      borderColor: 'rgba(24, 144, 255, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(24, 144, 255, .8)',
      hoverBorderColor: 'rgba(24, 144, 255, 1)',
      data: [3000, 13500, 4700, 2500, 5600, 5500]
    }, 
    {
      label:'Goal',
      backgroundColor: 'rgba(1, 21, 41, .6)',
      borderColor: 'rgba(1, 21, 41, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(1, 21, 41, 0.8)',
      hoverBorderColor: 'rgba(1, 21, 41, 1)',
      data: [5000, 15000, 8000, 6500, 10000, 12000]
    }
  ]
};



const QuoteAttainment = () => (

		<Card title="Delivery Quota" id='quota'>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              stacked: true,
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                callback: function(value, index, values) {
                  return '$' + value.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,');
                }
              }
            }]
          }
        }}
      />
		</Card>
	);

export default QuoteAttainment;
