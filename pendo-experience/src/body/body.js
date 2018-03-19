import React from 'react';
import './body.css';
import MetricsWidget from '../dashboard/metrics-widget.js';

const Body = () => (
	<div className="body-container">
		<div className="app-container">
			<div className="vertical-menu">
				<input type="text" name="search" className="search-box" placeholder="Search"/>
				<div className="settings-options">
					<i class="fas fa-envelope fa-2x"></i>
					<i class="fas fa-bell fa-2x"></i>
					<i class="fas fa-user fa-2x"></i>
				</div>
			</div>
			<div className="main-content">
				<MetricsWidget />
			</div>
		</div>
	</div>


);


export default Body;