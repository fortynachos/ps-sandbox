import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './contacts.css';

const data = [
	{
		name: 'Pendo Inc.',
		rep: 'Tayyab Hussain',
		territory: 'T4',
		industry: 'Supply Chain',
		customer: 'John Smith'
	},
	{
		name: 'Pendo Inc.',
		rep: 'Tayyab Hussain',
		territory: 'T4',
		industry: 'Supply Chain',
		customer: 'John Smith'
	},
	{
		name: 'Pendo Inc.',
		rep: 'Tayyab Hussain',
		territory: 'T4',
		industry: 'Supply Chain',
		customer: 'John Smith'
	},
	{
		name: 'Pendo Inc.',
		rep: 'Tayyab Hussain',
		territory: 'T4',
		industry: 'Supply Chain',
		customer: 'John Smith'
	},
	{
		name: 'Pendo Inc.',
		rep: 'Tayyab Hussain',
		territory: 'T4',
		industry: 'Supply Chain',
		customer: 'John Smith'
	}
];

const columns = [
	{
		Header: 'Name',
		accessor: 'name'
	},
	{
		Header: 'Assigned Rep',
		accessor: 'rep'
	},
	{
		Header: 'Territory',
		accessor: 'territory'
	},
	{
		Header: 'Industry',
		accessor: 'industry'
	},
	{
		Header: 'Customer/Prospect',
		accessor: 'customer'
	}
];


const Contacts = () => (
	<div>
		<ReactTable data={data} columns={columns} className="-striped -highlight"/>
	</div>
	);



export default Contacts;