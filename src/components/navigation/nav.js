import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


// Navigation bar
// Only of note is onNavClick is to update the page title as people click on it. That's all

const Navigation = ({onNavClick}) => (
	<div className="nav-bar">
		<div className="logo">
			<h3>
				Acme CRM
			</h3>
			<img src={require("./clouds.png")} alt="logo" id="cloud-logo"/>
		</div>
		<Menu
			theme='dark'
			id="main-menu"
		>
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
			</Menu.Item>
		</Menu>
		<Menu
			theme="dark"
            className="settings-menu"
            subMenuCloseDelay="1"
			style={{
				"bottom": "10px",
				"position": "absolute",
				width: 220
			}}
			>
			<SubMenu key="sub1" title={<span><Icon type="setting" /><span>Settings</span></span>}>
				<MenuItemGroup>
					<Menu.Item key="5">
						<Icon type="user" />
						<span>Profile</span>
					</Menu.Item>
					<Menu.Item key="6">
						<Icon type="team" />
						<span>Manage Users</span>
					</Menu.Item>
					<Menu.Item key="9">
						<Icon type="customer-service" />
						<span>Contact Support</span>
					</Menu.Item>
				</MenuItemGroup>
			</SubMenu>
		</Menu>
	</div>
);

export default Navigation;
