import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/dashboard.js';
import Accounts from './components/accounts/accounts.js';
import Contacts from './components/contacts/contacts.js';
import Opportunities from './components/opportunities/opportunities.js';
import Details from './components/details/details.js';

const Main = () => (
	<main>
		<Switch>
			<Route exact path ='/' component={Dashboard}/>
			<Route path='/accounts' component={Accounts} />
			<Route path='/contacts' component={Contacts} />
			<Route path='/opportunities' component={Opportunities} />
			<Route path='/*/*/details' component={Details} />
		</Switch>
	</main>
	);

export default Main;