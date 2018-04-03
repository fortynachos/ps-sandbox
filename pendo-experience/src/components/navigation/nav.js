import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';



const Navigation = ({onNavClick}) => (
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
				<Link to='/' onClick={() => onNavClick('Dashboard')}>
					<Icon type="home" />
					<span>Dashboard</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="2">
				<Link to='/accounts' onClick={() => onNavClick('Accounts')}>
					<Icon type="team" />
					<span>Accounts</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="3">
				<Link to='/contacts' onClick={() => onNavClick('Contacts')}>
					<Icon type="contacts" />
					<span>Contacts</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="4">
				<Link to='/opportunities' onClick={() => onNavClick('Opportunities')}>
					<Icon type="folder-open" />
					<span>Opportunities</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="5">
				<Link to='/1/1/details' onClick={() => onNavClick('Details')}>
					<Icon type="folder-open" />
					<span>Temporary Details</span>
				</Link>
			</Menu.Item>
		</Menu>
	</div>
);

export default Navigation;