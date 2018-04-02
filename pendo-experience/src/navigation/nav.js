import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';



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
				<Link to='/'>
					<Icon type="pie-chart" />
					<span>Dashboard</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="2">
				<Link to='/accounts'>
					<Icon type='desktop' />
					<span>Accounts</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="3">
				<Link to='/contacts'>
					<Icon type='inbox' />
					<span>Contacts</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="4">
				<Link to='/opportunities'>
					<Icon type='mail' />
					<span>Opportunities</span>
				</Link>
			</Menu.Item>
		</Menu>
	</div>
);

export default Navigation;