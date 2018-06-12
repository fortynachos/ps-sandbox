import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';


// See https://ant.design/components/table/


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 250,
  render: (text,record) => <Link to={"/opportunities/" + record._id +"/details"}><span>{text}</span></Link>
}, {
  title: 'Account',
  dataIndex: 'account',
  key: 'account',
  width: 150,
}, {
  title: 'Contact',
  dataIndex: 'contact',
  key: 'contact',
  width: 150,
}, {
  title: 'Rep',
  dataIndex: 'rep',
  key: 'rep',
  width: 150,
}];




export default class Opportunities extends React.Component {
  componentWillMount() {
    this.props.onOpportunitiesLoad();
  }
  render() {
    return (
      <Table columns={columns} dataSource={this.props.opportunitiesList} loading={this.props.loading} style={{margin: "0px 15px"}} scroll={{y:450}}/>
    )
  }
}
