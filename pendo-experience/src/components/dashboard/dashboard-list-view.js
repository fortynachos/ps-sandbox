import React from 'react';
import './dashboard.css';
import { Card, Table } from 'antd';
import { Link } from 'react-router-dom';



// See https://ant.design/components/table/
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 200,
  render: (text,record) => <Link to={"/opportunities/" + record._id +"/details"}><span>{text}</span></Link>
}, {
  title: 'Account',
  dataIndex: 'account',
  key: 'account',
  width: 100
}];


export default class ListView extends React.Component {
  componentWillMount() {
    this.props.onOpportunitiesLoad();
  }

  render() {
    return (
      <Card title="Open Opportunities" id="list-view">
        <Table columns={columns} dataSource={this.props.opportunitiesList} loading={this.props.loading} size="middle" scroll={{y: 400}}/>
      </Card>
    )
  }
}
