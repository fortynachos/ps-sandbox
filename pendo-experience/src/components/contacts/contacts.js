import React from 'react';
import { Table} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';



// the Link in the below is just a test, ideally i would like this to trigger in the components
// To grab the id of the person/opportunity/account and pull in the right information


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: (text,record) => <Link to={"/contacts/" + record._id +"/details"}><span>{text}</span></Link>,
}, {
  title: 'Account',
  dataIndex: 'account',
  key: 'account',
  width: 150,
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
  width: 150,
}, {
  title: 'Phone',
  dataIndex: 'phone',
  key: 'phone',
  width: 150,
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  width: 150,
}];

export default class Contacts extends React.Component {
  componentWillMount() {
    this.props.onContactsRequest();
  }
  render() {
    return (
      <Table columns={columns} dataSource={this.props.contactList} loading={this.props.loading} style={{margin: "0px 15px"}} scroll={{y: 500}}/>
    );
  }
}
