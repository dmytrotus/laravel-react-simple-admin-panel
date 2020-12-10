import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AdminView from '../View/AdminView';
import { Project } from '../Models/ProjectModel';
import { Provider } from 'react-redux';
import { store } from '@/redux/ReduxStore';
import { SaveProjectsData } from '@/redux/actions';

function AdminController() {

	useEffect(() => {
		Project.all().then(response => {
            store.dispatch(SaveProjectsData( response ));
		})
	}, []);

    return (
            <AdminView />
    );
}


if (document.getElementById('admin-component')) {
    ReactDOM.render(
    <Provider store={store}>
    	<AdminController />
    </Provider>, document.getElementById('admin-component'));
}
