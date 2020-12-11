import React, { useState, useEffect } from 'react';
import AdminProjectsView from '../View/AdminProjectsView';
import { Project } from '../Models/ProjectModel';
import { store } from '@/redux/ReduxStore';
import { SaveProjectsData } from '@/redux/actions';
import { SetNewProjectState } from '@/redux/actions';

function AdminProjectsController() {

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
            <AdminProjectsView
            OpenNewProjectArea={OpenNewProjectArea}
            handleNewProjectChange={handleNewProjectChange}
            SaveNewProject={SaveNewProject} />
    );
}


export default AdminProjectsController;