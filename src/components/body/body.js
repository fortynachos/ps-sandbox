import React from 'react';
import Main from '../../main.js';
import { Icon, Input, Button, Modal,Form, Select } from 'antd';
import './body.css';


const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;

// This dynamically gets plugged into the fields to pull the right information into the Modal
const fieldTwoList = {
	"Accounts": "Rep: ",
	"Contacts": "Email: ",
	"Opportunities": "Contact: "
};
const fieldThreeList = {
	"Accounts": "Territory: ",
	"Contacts": "Phone #: ",
	"Opportunities": "ARR: "
};


export default class Body extends React.Component {
	constructor(props) {
		super(props);

		// visible -> whether the modal should show or not (from "Add New")
		// OKLoading -> created a loading effect for the clicking ok on the modal
		// addNewFormData -> this is the information that gets updated, and eventualyl sent with Add New
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

	// Open Modal
	_onAddNew(e) {
		e.preventDefault();
		this.setState({
			visible: true
		})
	}

	// Close Modal
	_onCancel(e) {
		e.preventDefault();
		this.setState({
			visible: false
		})
	}

	//
	_onOK(e) {
		e.preventDefault();

		// Loading on OK
		this.setState({
			OKLoading: true
		});

		// Wait 1 second then stop loading on OK, close modal, set the AddNewFormdata into local storage as JSON
		// set a loading parameter as false used from details page
		setTimeout(() => {
			this.setState({
				OKLoading: false,
				visible: false
			});

			// Set local Storage objs
			localStorage.setItem('addNewFormData', JSON.stringify(this.state.addNewFormData));
			localStorage.setItem('loading', false)

			// Force change to new details page with appropriate data stored in localStorage
			window.location.href = this.state.addNewFormData.value + "/new/details"
		},1000);
	}

	// Change <select> <option> value and set State
	_onHandleSelectChange(value) {
		let addNewFormData = Object.assign({}, this.state.addNewFormData);
		addNewFormData["value"] = value
		this.setState({
			addNewFormData
		})
	}

	// Change object that gets changed in Modal
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
                <div className="pendo-sales-engineering-footer">
                  <span>Made with <span><Icon type="heart" className='heart'/></span> by Pendo Sales Engineering</span>
                </div>
			</div>
		)
	}
}
