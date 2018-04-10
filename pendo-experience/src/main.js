import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard.js';
import accountList from './containers/accounts/accountsContainer.js';
import Contacts from './components/contacts/contacts.js';
import Opportunities from './components/opportunities/opportunities.js';
import FinalDetails from './containers/details/detailsContainer.js';

const Main = () => (
	<main>
		<Switch>
			<Route exact path ='/' component={Dashboard}/>
			<Route path='/accounts' component={accountList} />
			<Route path='/contacts' component={Contacts} />
			<Route path='/opportunities' component={Opportunities} />
			<Route path='/*/*/details' component={FinalDetails} />
		</Switch>
	</main>
	);

export default Main;
