import React, { Fragment, useState, useEffect } from 'react';
import AdminProjectsView from '../View/AdminProjectsView';
import { Project } from '../Models/ProjectModel';
import { store } from '@/redux/ReduxStore';
import { SaveProjectsData } from '@/redux/actions';
import { SetNewProjectState } from '@/redux/actions';
import Modal from '../View/Modal';
import Passwords from '@/app/Passwords';

function AdminProjectsController() {

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

    const[editProjectState, setEditProjectState] = useState({
        isOpened: false,
        title: '',
        description: '',
        project_id: ''
    })

    const[modalState, setModalState] = useState({
        message: ''
    })

    const openEditForm = (e) => {
        e.preventDefault();
        const project_id = e.target.getAttribute('data-id');
        const author_token = e.target.getAttribute('data-author-token');
        if(new Passwords().token != author_token)
        {
            setModalState({
                message: 'Nie możesz edytować nie swój projekt'
            });
            $('#exampleModal').modal('show');
            return;
        }
        setEditProjectState({
            isOpened: true,
            title: '',
            description: '',
            project_id: project_id
        })




    }

    const editProject = (e) => {
        e.preventDefault();

    }

    return (
        <Fragment>
            <AdminProjectsView
            OpenNewProjectArea={OpenNewProjectArea}
            handleNewProjectChange={handleNewProjectChange}
            SaveNewProject={SaveNewProject}
            openEditForm={openEditForm}
            editProjectState={editProjectState}
             />
            <Modal modalState={modalState} />
        </Fragment>
    );
}


export default AdminProjectsController;