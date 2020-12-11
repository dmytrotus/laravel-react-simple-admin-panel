import React, { Fragment, useEffect } from 'react';
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
import { SaveProjectsData } from '@/redux/actions';
import { SaveTasksData } from '@/redux/actions';
import { Project } from '../Models/ProjectModel';
import { Task } from '../Models/TaskModel';

function AdminController() {

  useEffect(() => {
    Project.all().then(response => {
            store.dispatch(SaveProjectsData( response ));
    })
  }, []);

  useEffect(() => {
    Task.all().then(response => {
            store.dispatch(SaveTasksData( response ));
    })
  }, []);

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
