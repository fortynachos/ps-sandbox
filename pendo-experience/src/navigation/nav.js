import React from 'react';
import './nav.css';



const Navigation = () => (

		<div className="nav-bar">
			<div className="logo">
				<h1>
					CRM
				</h1>
			</div>
			<ul className="nav-items">
				<li className="nav-item">
					<i className="fas fa-angle-double-right"></i> <span className="link-text">Dashboard</span>
				</li>
				<li className="nav-item">
					<i className="fas fa-angle-double-right"></i> <span className="link-text">Accounts</span>
				</li>
				<li className="nav-item">
					<i className="fas fa-angle-double-right"></i> <span className="link-text">Contacts</span>
				</li>
				<li className="nav-item">
					<i className="fas fa-angle-double-right"></i> <span className="link-text">Opportunities</span>
				</li>
			</ul>
		</div>
		
	);


export default Navigation;