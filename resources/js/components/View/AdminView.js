import React, { Fragment } from 'react';
import AdminProjectsView from './AdminProjectsView';
import AdminTasksView from './AdminTasksView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function AdminView() {

    return (
    	<Fragment>
    	<Router>
    		<Switch>
	    		<Route path="/admin/projects" exact component={AdminProjectsView}/>
	    		<Route path="/admin/tasks" exact component={AdminTasksView}/>
	    	</Switch>
	    </Router>
    	</Fragment>
    );
}

export default AdminView;
