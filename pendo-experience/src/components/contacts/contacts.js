import React from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';



// the Link in the below is just a test, ideally i would like this to trigger in the components
// To grab the id of the person/opportunity/account and pull in the right information


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text,record) => <Link to="/1/1/details"><span>{text}</span></Link>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a>Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a>Delete</a>
      <Divider type="vertical" />
      <a className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];


const Contacts = ({contactList}) => (
	<Table columns={columns} dataSource={contactList}  style={{margin: "0px 15px"}}/>
);

export default Contacts;
