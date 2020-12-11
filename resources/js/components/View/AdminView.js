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


function AdminView(props) {
  
    return (
    	<Fragment>
    	<Router>
    		<Switch>
	    		<Route path="/admin/projects" exact
          render={() => <AdminProjectsView
          OpenNewProjectArea={props.OpenNewProjectArea}
          handleNewProjectChange={props.handleNewProjectChange}
          SaveNewProject={props.SaveNewProject}
          /> } />


	    		<Route path="/admin/tasks" exact component={AdminTasksView}/>
	    	</Switch>
	    </Router>
    	</Fragment>
    );
}

export default AdminView;
