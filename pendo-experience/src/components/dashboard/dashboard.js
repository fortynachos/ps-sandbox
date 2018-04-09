import React from 'react';
import Forecast from '../dashboard/forecast.js';
import ListView from '../dashboard/dashboard-list-view.js';
import FinalPipeline from '../../containers/pipeline/pipelineContainer.js';
import QuotaAttainment from '../dashboard/quota-attainment.js';
import './dashboard.css';



const Dashboard = () => (
	<div className="dashboard-container">
		<Forecast />
		<ListView />
		<FinalPipeline />
		<QuotaAttainment />
	</div>

	);


export default Dashboard;