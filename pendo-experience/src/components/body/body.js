import React from 'react';
import Main from '../../main.js';
import { Input, Button, Modal,Form, Select, Avatar, Badge } from 'antd';
import './body.css';
const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;

export default class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			OKLoading: false
		}
	}

	_onAddNew(e) {
		e.preventDefault();
		this.setState({
			visible: true
		})
	}

	_onCancel(e) {
		e.preventDefault();
		this.setState({
			visible: false
		})
	}
	_onOK(e) {
		e.preventDefault();
		this.setState({
			OKLoading: true
		});
		setTimeout(() => {
			this.setState({
				OKLoading: false,
				visible: false
			})
		},1000);
	}

	render() {
		return (
			<div className="body-container">
				<div className="app-container">
					<div className="vertical-menu">
						<Search placeholder="Search" enterButton onSearch={value => console.log(value)}  />
						<div className="settings-options">
							<Badge count={1}><Avatar size="large" shape="square" icon="message" /></Badge>
							<Badge count={1}><Avatar size="large" shape="square" icon="notification" /></Badge>
							<Badge count={0}><Avatar size="large" shape="square" icon="user" /></Badge>
						</div>

					</div>
					<div className="name-and-new">
						<h1>
							{this.props.title}
						</h1>
						<Button type='primary' size="large" id="add-new" onClick={(e) => this._onAddNew(e)}>
							Add New
						</Button>
						<Modal
							title="Create New"
							visible={this.state.visible}
							onOk={(e) => this._onOK(e)}
							confirmLoading={this.state.OKLoading}
							onCancel={(e) => this._onCancel(e)}
						>
							<Form layout="vertical">
								<FormItem>
									<h3>
										Type:
									</h3>
									<Select defaultValue="">
										<Option value="Accounts">Account</Option>
										<Option value="Contacts">Contact</Option>
										<Option value="Opportunities">Opportunity</Option>
									</Select>
								</FormItem>
								<FormItem>
									<h3>
										Name:
									</h3>
									<Input></Input>
								</FormItem>
								<FormItem>
									<h3>
										Address:
									</h3>
									<Input></Input>
								</FormItem>
								<FormItem>
									<h3>
										Phone #:
									</h3>
									<Input></Input>
								</FormItem>
							</Form>
						</Modal>
					</div>
					<div className="main-content">
						<Main />
					</div>
				</div>
			</div>
		)
	}
}
