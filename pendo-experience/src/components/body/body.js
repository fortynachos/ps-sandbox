import React from 'react';
import Main from '../../main.js';
import { Input, Button, Modal,Form, Select } from 'antd';
import './body.css';
const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;

export default class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			OKLoading: false,
			value: '',
			name: '',
			email: '',
			phone: ''
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
			});
			localStorage.setItem('ObjectType', this.state.value);
			localStorage.setItem('Name', this.state.name);
			localStorage.setItem('Email', this.state.email);
			localStorage.setItem('Phone', this.state.phone);
			localStorage.setItem('loading', false)
			window.location.href = this.state.value + "/new/details"
		},1000);
	}


	_onHandleSelectChange(value) {
		this.setState({
			value
		});
	}

	_onHandleNameChange(e) {
		this.setState({
			name: e.target.value
		})
	}
	_onHandleEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	}
	_onHandlePhoneChange(e) {
		this.setState({
			phone: e.target.value
		})
	}
	render() {
		return (
			<div className="body-container">
				<div className="app-container">
					<div className="vertical-menu">
						<Search placeholder="Search" enterButton onSearch={value => console.log(value)}/>
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
									<Select defaultValue="" value={this.state.value} onChange={(value) => this._onHandleSelectChange(value)}>
										<Option value="Accounts">Account</Option>
										<Option value="Contacts">Contact</Option>
										<Option value="Opportunities">Opportunity</Option>
									</Select>
								</FormItem>
								<FormItem>
									<h3>
										Name:
									</h3>
									<Input value={this.state.name} onChange={(e) => this._onHandleNameChange(e)}></Input>
								</FormItem>
								<FormItem>
									<h3>
										Email:
									</h3>
									<Input value={this.state.email} onChange={(e) => this._onHandleEmailChange(e)}></Input>
								</FormItem>
								<FormItem>
									<h3>
										Phone #:
									</h3>
									<Input value={this.state.phone} onChange={(e) => this._onHandlePhoneChange(e)}></Input>
								</FormItem>
							</Form>
						</Modal>
					</div>
					<div className="name-and-new">
						<h1>
							{this.props.title}
						</h1>
					</div>
					<div className="main-content">
						<Main />
					</div>
				</div>
			</div>
		)
	}
}
