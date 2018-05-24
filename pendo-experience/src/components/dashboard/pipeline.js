import React from 'react';
import './dashboard.css';
import { Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';






const Pipeline = ({pipelineData}) => (

      <Card title="Pipeline" id="forecast">
            <ResponsiveContainer width="100%" height="80%">
                  <BarChart
                        data={pipelineData}
                        margin={{
                        top: 15, right: 0, left: 0, bottom: 0
                        }}
                        layout="vertical"
                        barCategoryGap="0%"
                        stackOffset='wiggle'
                  >
                        <CartesianGrid stroke="#ddd" horizontal={false} vertical={false}/>
                        <XAxis type="number"/>
                        <YAxis dataKey="name" type="category"/>
                        <Tooltip/>
                        <Bar dataKey="value" fill="#40a9ff" />
                        </BarChart>
            </ResponsiveContainer>
      </Card>
	);


export default Pipeline;
