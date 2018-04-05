import React from 'react';
import './dashboard.css';

import { Card } from 'antd';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Line} from 'recharts';


const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
              {name: 'Page B', uv: 868, pv: 967, amt: 1506},
              {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
              {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
              {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
              {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];

/*
      if you change the value above to an array it will create a centered graph. Use the largest value as 100%. 
      Then just compute a centroid and a range from there on

*/



const MetricsWidget = () => (
	<Card title="Forecast" extra={<a>More</a>} id="metrics">

                  <ComposedChart
                  width={600} 
                  height={220}  
                  data={data}
                  margin={{
                        top: 0, right: 0, bottom: 0, left: 0
                  }}
                  >
                  <defs>
                        <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#7cb5ec" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#7cb5ec" stopOpacity={0}/>
                            </linearGradient>
                      </defs>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey='amt' fill='url(#colorAmt)' fillOpacity={1} stroke='#5fa0dd'/>
                <Line type='monotone' strokeDasharray="3 3" dot={false} dataKey='uv' stroke='#ff7300' />
       </ComposedChart>
	</Card>
);	


export default MetricsWidget;