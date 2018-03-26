import React from 'react';
import './body.css';
import Main from '../main.js';


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
			<div className="name-and-new">
				<h1>
					Dashboard
				</h1>
				<button id="add-new">
					Add New
				</button>
			</div>
			<div className="main-content">
				<Main />
			</div>
		</div>
	</div>
);


export default Body;
