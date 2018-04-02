import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;




// const Navigation = () => (

// 		<div className="nav-bar">
// 			<div className="logo">
// 				<h1>
// 					CRM
// 				</h1>
// 			</div>
// 			<ul className="nav-items">
// 				<Link to='/'>
// 					<li className="nav-item">
// 						<i className="fas fa-angle-double-right"></i> <span className="link-text">Dashboard</span>
// 					</li>
// 				</Link>
// 				<Link to='/accounts'>
// 					<li className="nav-item">
// 						<i className="fas fa-angle-double-right"></i> <span className="link-text">Accounts</span>
// 					</li>
// 				</Link>
// 				<Link to='/contacts'>
// 					<li className="nav-item">
// 						<i className="fas fa-angle-double-right"></i> <span className="link-text">Contacts</span>
// 					</li>
// 				</Link>
// 				<Link to='/opportunities'>
// 					<li className="nav-item">
// 						<i className="fas fa-angle-double-right"></i> <span className="link-text">Opportunities</span>
// 					</li>
// 				</Link>
// 			</ul>
// 		</div>
		
// 	);


const Navigation = () => (
	<div className="nav-bar">
		<Menu
			theme='dark'
			style={{width: 256}}
		>
			<div className="logo">
				<h1>
					CRM
				</h1>
			</div>
			<Menu.Item key="1">
				<Icon type="pie-chart" />
				<span>Dashboard</span>
			</Menu.Item>
			<Menu.Item key="2">
				<Icon type='desktop' />
				<span>Accounts</span>
			</Menu.Item>
			<Menu.Item key="3">
				<Icon type='inbox' />
				<span>Accounts</span>
			</Menu.Item>
			<Menu.Item key="4">
				<Icon type='mail' />
				<span>Accounts</span>
			</Menu.Item>
		</Menu>
	</div>
);

export default Navigation;