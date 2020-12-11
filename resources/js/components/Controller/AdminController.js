import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AdminView from '../View/AdminView';
import { Project } from '../Models/ProjectModel';
import { Provider } from 'react-redux';
import { store } from '@/redux/ReduxStore';
import { SaveProjectsData } from '@/redux/actions';
import { SetNewProjectState } from '@/redux/actions';

function AdminController() {

	useEffect(() => {
		Project.all().then(response => {
            store.dispatch(SaveProjectsData( response ));
		})
	}, []);

    const[newProjectState, setNewProjectState] = useState({
        isOpened: false,
        title: '',
        description: ''
    });

    useEffect(() => {
        store.dispatch(SetNewProjectState( newProjectState ));
    }, [newProjectState])

    const OpenNewProjectArea = (e) => {
        e.preventDefault();
        if(newProjectState.isOpened == false)
        {
            setNewProjectState({
               isOpened: true,
                title: '',
                description: '' 
            })
        } else {
            setNewProjectState({
               isOpened: false,
                title: '',
                description: '' 
            })
        }
    }

    const handleNewProjectChange = (e) => {
        e.preventDefault();
        setNewProjectState(prevState =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const SaveNewProject = (e) => {
        e.preventDefault();
        Project.create(newProjectState).then(response => {
            store.dispatch(SaveProjectsData( response ));
            setNewProjectState({
               isOpened: true,
                title: '',
                description: '' 
            })
        })

    }

    return (
            <AdminView
            OpenNewProjectArea={OpenNewProjectArea}
            handleNewProjectChange={handleNewProjectChange}
            SaveNewProject={SaveNewProject} />
    );
}


if (document.getElementById('admin-component')) {
    ReactDOM.render(
    <Provider store={store}>
    	<AdminController />
    </Provider>, document.getElementById('admin-component'));
}
