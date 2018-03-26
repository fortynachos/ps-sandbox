import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';


const Navigation = () => (

		<div className="nav-bar">
			<div className="logo">
				<h1>
					CRM
				</h1>
			</div>
			<ul className="nav-items">
				<Link to='/'>
					<li className="nav-item">
						<i className="fas fa-angle-double-right"></i> <span className="link-text">Dashboard</span>
					</li>
				</Link>
				<Link to='/accounts'>
					<li className="nav-item">
						<i className="fas fa-angle-double-right"></i> <span className="link-text">Accounts</span>
					</li>
				</Link>
				<Link to='/contacts'>
					<li className="nav-item">
						<i className="fas fa-angle-double-right"></i> <span className="link-text">Contacts</span>
					</li>
				</Link>
				<Link to='/opportunities'>
					<li className="nav-item">
						<i className="fas fa-angle-double-right"></i> <span className="link-text">Opportunities</span>
					</li>
				</Link>
			</ul>
		</div>
		
	);


export default Navigation;