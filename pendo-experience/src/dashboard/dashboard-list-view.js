import React from 'react';
import './dashboard.css';
import { Card, Table, Icon, Divider } from 'antd';


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

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
}];

var i = 0;


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
	<Card title="Open Opportunities" extra={<a>More</a>}>
		<Table columns={columns} dataSource={data} />
	</Card>
	)

export default ListView;
