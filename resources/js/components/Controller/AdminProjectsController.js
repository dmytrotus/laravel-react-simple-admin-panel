import React, { Fragment, useState, useEffect } from 'react';
import AdminProjectsView from '../View/AdminProjectsView';
import { Project } from '../Models/ProjectModel';
import { store } from '@/redux/ReduxStore';
import { SaveProjectsData } from '@/redux/actions';
import { SetNewProjectState } from '@/redux/actions';
import Modal from '../View/Modal';
import Passwords from '@/app/Passwords';
import { connect } from 'react-redux';

function AdminProjectsController(props) {

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

    const projects = props.projects;
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

        const choosenProject = projects.filter(el=>el.id == project_id)[0];
        setEditProjectState({
            isOpened: true,
            title: choosenProject.title,
            description: choosenProject.description,
            project_id: project_id
        })
    }

    const handleEditProject = (e) => {
        e.persist();
        setEditProjectState(prevState =>({
            ...prevState,
            [e.target.name]:e.target.value
        }))

    }

    const editableProject = (project_id) => {
        if(editProjectState.isOpened == true && editProjectState.project_id == project_id){
            return true;
        } else {
            return false;
        }
    }

    const updateProject = (e) => {
        e.preventDefault();
        Project.update(editProjectState).then(response => {
            store.dispatch(SaveProjectsData( response ));
            setEditProjectState({
                isOpened: false,
                title: '',
                description: '',
                project_id: ''
            })
        })
    }

    const deleteProjectModal = (e) => {
        e.preventDefault();
        const project_id = e.target.getAttribute('data-id');
        const author_token = e.target.getAttribute('data-author-token');
        if(new Passwords().token != author_token)
        {
            setModalState({
                message: 'Nie możesz usuwać nie swój projekt'
            });
            $('#exampleModal').modal('show');
            return;
        }
        setModalState({
            message: 'Czy napewno usuńąć projekt?',
            removeBtn: true,
            project_id: project_id
        });
        $('#exampleModal').modal('show');
    }

    const confirmRemove = (e) => {
        e.preventDefault();
        Project.delete(modalState).then(response => {
            store.dispatch(SaveProjectsData( response ));
            $('#exampleModal').modal('hide');
        })
    }

    return (
        <Fragment>
            <AdminProjectsView
            OpenNewProjectArea={OpenNewProjectArea}
            handleNewProjectChange={handleNewProjectChange}
            SaveNewProject={SaveNewProject}
            openEditForm={openEditForm}
            editProjectState={editProjectState}
            editableProject={editableProject}
            handleEditProject={handleEditProject}
            updateProject={updateProject}
            deleteProjectModal={deleteProjectModal}
             />
            <Modal 
            modalState={modalState}
            confirmRemove={confirmRemove}
             />
        </Fragment>
    );
}

const mapStateToProps = state => {
  return {
    projects: state.ProjectsData
  }
}

const AdminProjectsControllerWrapped = connect(mapStateToProps)(AdminProjectsController);

export default AdminProjectsControllerWrapped;