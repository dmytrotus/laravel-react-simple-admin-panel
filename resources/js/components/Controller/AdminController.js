import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import AdminProjectsController from './AdminProjectsController';
import AdminTasksController from './AdminTasksController';
import { Provider } from 'react-redux';
import { store } from '@/redux/ReduxStore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function AdminController() {

    return (
     <Fragment>
        <Router>
            <Switch>
                <Route path="/admin/projects" exact component={AdminProjectsController}/>
                <Route path="/admin/tasks" exact component={AdminTasksController}/>
            </Switch>
        </Router>
     </Fragment>
    );
}


if (document.getElementById('admin-component')) {
    ReactDOM.render(
    <Provider store={store}>
    	<AdminController />
    </Provider>, document.getElementById('admin-component'));
}
