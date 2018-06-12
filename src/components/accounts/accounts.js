import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';


// See https://ant.design/components/table/
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: (text,record) => <Link to={"/accounts/" + record._id +"/details"}><span>{text}</span></Link>
}, {
  title: 'Rep',
  dataIndex: 'rep',
  key: 'rep',
  width: 150,
}, {
  title: 'Territory',
  dataIndex: 'territory',
  key: 'territory',
  width: 150,
}, {
  title: 'Industry',
  dataIndex: 'industry',
  key: 'industry',
  width: 150,
  render: (text) => <span>{text}</span>
},
{
 title: 'Address',
 dataIndex: 'address',
 key: 'address',
 width: 300,
}];

export default class Accounts extends React.Component {
  componentWillMount() {
    this.props.onAccountsLoad();
  }
  render() {
    return(
      <Table columns={columns} dataSource={this.props.accounts} loading={this.props.loading} style={{margin: "0px 15px"}} size="large" scroll={{ y:450}}/>
    )
  }
}
