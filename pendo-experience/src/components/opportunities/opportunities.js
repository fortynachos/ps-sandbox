import React from 'react';
import { Table, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';



const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text,record) => <Link to={"/opportunities/" + record._id +"/details"}><span>{text}</span></Link>
}, {
  title: 'Account',
  dataIndex: 'account',
  key: 'account',
}, {
  title: 'Contact',
  dataIndex: 'contact',
  key: 'contact',
}, {
  title: 'Rep',
  dataIndex: 'rep',
  key: 'rep',
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




export default class Opportunities extends React.Component {
  componentWillMount() {
    this.props.onOpportunitiesLoad();
  }
  render() {
    return (
      <Table columns={columns} dataSource={this.props.opportunitiesList} loading={this.props.loading} style={{margin: "0px 15px"}} scroll={{y:500}}/>
    )
  }
}
