import React from 'react';
import { Table, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text,record) => <Link to={"/accounts/" + record._id +"/details"}><span>{text}</span></Link>
}, {
  title: 'Rep',
  dataIndex: 'rep',
  key: 'rep',
}, {
  title: 'Territory',
  dataIndex: 'territory',
  key: 'territory',
}, {
  title: 'Industry',
  dataIndex: 'industry',
  key: 'industry',
},
{
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

export default class Accounts extends React.Component {
  componentWillMount() {
    this.props.onAccountsLoad();
  }
  render() {
    return(
      <Table columns={columns} dataSource={this.props.accounts} loading={this.props.loading} style={{margin: "0px 15px"}} scroll={{ y:500}}/>
    )
  }
}
