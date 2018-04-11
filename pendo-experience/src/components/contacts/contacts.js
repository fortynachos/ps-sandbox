import React from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';



const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
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
