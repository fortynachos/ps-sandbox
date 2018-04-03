import React from 'react';
import './dashboard.css';
import { Card, Table } from 'antd';


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  }, 
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
  }, 
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '4',
    name: 'John Brown',
    age: 32,
  }, 
  {
    key: '5',
    name: 'Jim Green',
    age: 42,
  }, 
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
  },
  {
    key: '8',
    name: 'Jim Green',
    age: 42,
  }, 
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
  }
];




// const ListView = () => (
// 	<div className="widget-container" id="list-view">
// 		<h2>
// 			Open Opportunities
// 		</h2>
// 		<div className="list-container">
// 			<div className="header-container">
// 				<div className="list-left">
// 					<p>Deal</p>
// 				</div>
// 				<div className="list-right">
// 					<p>Stage</p>
// 				</div>
// 			</div>
// 			<div className="list-table">
// 				{
// 					data.map(function(content) {
// 						if (i%2 === 0) {
// 							i++;
// 							return (
// 									<div className="list-item blue" key={i}>
// 										<span>{content.test1}</span> <span>{content.test2}</span>
// 									</div>
// 							);
// 						} else {
// 							i++;
// 							return(
// 								<div className="list-item white" key={i}>
// 									<span>{content.test1}</span> <span>{content.test2}</span>
// 								</div>
// 							);
// 						}
// 					})
// 				}
// 			</div>
// 		</div>
// 	</div>
// );


const ListView = () => (
	<Card title="Open Opportunities" extra={<a>More</a>} id="list-view">
		<Table columns={columns} dataSource={data} size="middle"/>
	</Card>
	)

export default ListView;
