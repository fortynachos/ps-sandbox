import React from 'react';
import Main from '../main.js';
import { Input, Button, Icon } from 'antd';
import './body.css';
const Search = Input.Search;


const Body = () => (
	<div className="body-container">
		<div className="app-container">
			<div className="vertical-menu">
				<Search placeholder="Search" enterButton onSearch={value => console.log(value)} />
				<div className="settings-options">
					<Icon type="message" />
					<Icon type="notification" />
					<Icon type="user" />
				</div>

			</div>
			<div className="name-and-new">
				<h1>
					Dashboard
				</h1>
				<Button type='primary' size="large">
					Add New
				</Button>
			</div>
			<div className="main-content">
				<Main />
			</div>
		</div>
	</div>
);


export default Body;
