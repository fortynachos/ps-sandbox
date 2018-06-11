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
      data: [30000, 135000, 47000, 25000, 56000, 55000]
    }, 
    {
      label:'Goal',
      backgroundColor: 'rgba(1, 21, 41, .6)',
      borderColor: 'rgba(1, 21, 41, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(1, 21, 41, 0.8)',
      hoverBorderColor: 'rgba(1, 21, 41, 1)',
      data: [50000, 150000, 80000, 65000, 100000, 120000]
    }
  ]
};



const QuoteAttainment = () => (

		<Card title="Quota Attainment" id='quota'>
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
