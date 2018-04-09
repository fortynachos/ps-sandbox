import React from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
}, {
  title: 'Rep',
  dataIndex: 'rep',
  key: 'rep',
}, {
  title: 'Territory',
  dataIndex: 'territory',
  key: 'territory',
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


const Accounts = ({accounts}) => (
	<Table columns={columns} dataSource={accounts}  style={{margin: "0px 15px"}}/>
);


export default Accounts;
