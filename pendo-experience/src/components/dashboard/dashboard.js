import React from 'react';
import MetricsWidget from '../dashboard/metrics-widget.js';
import ListView from '../dashboard/dashboard-list-view.js';
import Forecast from '../dashboard/forecast.js';
import QuotaAttainment from '../dashboard/quota-attainment.js';
import './dashboard.css';



const Dashboard = () => (
	<div className="dashboard-container">
		<MetricsWidget />
		<ListView />
		<Forecast />
		<QuotaAttainment />
	</div>

	);


export default Dashboard;