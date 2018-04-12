import React from 'react';
import Main from '../../main.js';
import { Input, Button, Icon, Modal,Form, Select } from 'antd';
import './body.css';
const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;

export default class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
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

	render() {
		return (
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
							{this.props.title}
						</h1>
						<Button type='primary' size="large" id="add-new" onClick={(e) => this._onAddNew(e)}>
							Add New
						</Button>
						<Modal
							title="Basic Modal"
							visible={this.state.visible}
							onOk={(e) => this._onCancel(e)}
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
									<Input placeholder="Name"></Input>
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
