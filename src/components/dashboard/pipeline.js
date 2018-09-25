import React from 'react';
import './dashboard.css';
import { Card } from 'antd';
import {
      Doughnut
} from 'react-chartjs-2';


// See https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components
// & http://www.chartjs.org/
const data = {
      labels: [
            'Qual',
            'Sol Pres.',
            'Sol Acc.',
            'Proposal',
            'Pending'
      ],
      datasets: [{
            data: [300, 250, 200, 150, 100],
            borderWidth: 1,
            backgroundColor: [
                  'rgba(24, 144, 255, .6)',
                  'rgba(1, 21, 41, .6)',
                  'rgba(22, 101, 170,.6)',
                  'rgba(65, 182, 196,.6)',
                  'rgba(8,29,88,.6)'

            ],
            borderColor: [
                  'rgba(24, 144, 255, 1)',
                  'rgba(1, 21, 41, 1)',
                  'rgba(22, 101, 170,1)',
                  'rgba(65, 182, 196,1)',
                  'rgba(8,29,88,1)'
            ],
            hoverBorderColor: [
                  'rgba(24, 144, 255, 1)',
                  'rgba(1, 21, 41, 1)',
                  'rgba(22, 101, 170,1)',
                  'rgba(65, 182, 196,1)',
                  'rgba(8,29,88,1)'
            ],
            hoverBackgroundColor: [
                  'rgba(24, 144, 255, .8)',
                  'rgba(1, 21, 41, .8)',
                  'rgba(22, 101, 170,.8)',
                  'rgba(65, 182, 196,.8)',
                  'rgba(8,29,88,.8)'
            ]
      }]
};




const Pipeline = () => (
      <Card title="Pipeline" id="forecast">
            <Doughnut
                  data={data}
                  height={ 215 }
                  options={{
                  }}
            />
      </Card>
	);


export default Pipeline;
