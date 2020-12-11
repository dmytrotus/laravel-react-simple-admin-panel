import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import UserProjectsController from './UserProjectsController';
import UserTasksController from './UserTasksController';
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

function UserController() {

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
                <Route path="/user/projects" exact component={UserProjectsController}/>
                <Route path="/user/tasks" exact component={UserTasksController}/>
            </Switch>
        </Router>
     </Fragment>
    );
}


if (document.getElementById('user-component')) {
    ReactDOM.render(
    <Provider store={store}>
    	<UserController />
    </Provider>, document.getElementById('user-component'));
}