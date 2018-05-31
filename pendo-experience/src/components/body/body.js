import React from 'react';
import Main from '../../main.js';
import { Input, Button, Modal,Form, Select } from 'antd';
import './body.css';
const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;


const fieldTwoList = {
	"Accounts": "Rep: ",
	"Contacts": "Email: ",
	"Opportunities": "Contact: "
}

const fieldThreeList = {
	"Accounts": "Territory: ",
	"Contacts": "Phone #: ",
	"Opportunities": "ARR: "
}


export default class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			OKLoading: false,
			addNewFormData: {
				value: 'Accounts',
				fieldOne: '',
				fieldTwo: '',
				fieldThree: ''
			}
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
			localStorage.setItem('addNewFormData', JSON.stringify(this.state.addNewFormData));
			console.log(localStorage);
			localStorage.setItem('loading', false)
			window.location.href = this.state.addNewFormData.value + "/new/details"
		},1000);
	}


	_onHandleSelectChange(value) {
		let addNewFormData = Object.assign({}, this.state.addNewFormData);
		addNewFormData["value"] = value
		this.setState({
			addNewFormData
		})
	}

	_onHandleChange(e) {
		let addNewFormData = Object.assign({}, this.state.addNewFormData);
		addNewFormData[e.target.name] = e.target.value;

		this.setState({
			addNewFormData
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
							confirmLoading={ this.state.OKLoading } 
							onCancel={(e) => this._onCancel(e)}
						>
							<Form layout="vertical">
								<FormItem>
									<h3>
										Type:
									</h3>
									<Select value={this.state.addNewFormData.value} onChange={(value) => this._onHandleSelectChange(value)}>
										<Option value="Accounts">Account</Option>
										<Option value="Contacts">Contact</Option>
										<Option value="Opportunities">Opportunity</Option>
									</Select>
								</FormItem>
								<FormItem>
									<h3>
										Name:
									</h3>
									<Input value={this.state.addNewFormData.fieldOne} name="fieldOne" onChange={(e) => this._onHandleChange(e)}></Input>
								</FormItem>
								<FormItem>
									<h3>
										{ fieldTwoList[this.state.addNewFormData.value] }
									</h3>
									<Input value={this.state.addNewFormData.fieldTwo} name="fieldTwo" onChange={(e) => this._onHandleChange(e)}></Input>
								</FormItem>
								<FormItem>
									<h3>
										{ fieldThreeList[this.state.addNewFormData.value] }
									</h3>
									<Input value={this.state.addNewFormData.fieldThree} name="fieldThree" onChange={(e) => this._onHandleChange(e)}></Input>
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
