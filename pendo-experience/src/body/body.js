import React from 'react';
import './body.css';
import MetricsWidget from '../dashboard/metrics-widget.js';
import ListView from '../dashboard/dashboard-list-view.js';
import Forecast from '../dashboard/forecast.js';
import QuotaAttainment from '../dashboard/quota-attainment.js';



const Body = () => (
	<div className="body-container">
		<div className="app-container">
			<div className="vertical-menu">
				<input type="text" name="search" className="search-box" placeholder="Search"/>
				<div className="settings-options">
					<i className="fas fa-envelope fa-2x"></i>
					<i className="fas fa-bell fa-2x"></i>
					<i className="fas fa-user fa-2x"></i>
				</div>
			</div>
			<div className="main-content">
				<MetricsWidget />
				<ListView />
				<Forecast />
				<QuotaAttainment />
			</div>
		</div>
	</div>
);


export default Body;