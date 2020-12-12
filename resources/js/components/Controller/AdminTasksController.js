import React, { Fragment, useState, useEffect } from 'react';
import AdminTasksView from '../View/AdminTasksView';
import { Task } from '../Models/TaskModel';
import { store } from '@/redux/ReduxStore';
import { SaveTasksData } from '@/redux/actions';
import { SetNewTaskState } from '@/redux/actions';
import Modal from '../View/Modal';
import { connect } from 'react-redux';

function AdminTasksController(props) {

    const[newTaskState, setNewTaskState] = useState({
        isOpened: false,
        title: '',
        description: '',
        project_id: ''
    });

    useEffect(() => {
        store.dispatch(SetNewTaskState( newTaskState ));
    }, [newTaskState])

    const OpenNewTaskArea = (e) => {
        e.preventDefault();
        if(newTaskState.isOpened == false)
        {
            setNewTaskState({
               isOpened: true,
                title: '',
                description: '',
                project_id: '' 
            })
        } else {
            setNewTaskState({
               isOpened: false,
                title: '',
                description: '',
                project_id: '' 
            })
        }
    }

    const handleNewTaskChange = (e) => {
        e.preventDefault();
        setNewTaskState(prevState =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const SaveNewTask = (e) => {
        e.preventDefault();
        Task.create(newTaskState).then(response => {
            store.dispatch(SaveTasksData( response ));
            setNewTaskState({
               isOpened: true,
                title: '',
                description: '' 
            })
        })
    }

    const[editTaskState, setEditTaskState] = useState({
        isOpened: false,
        title: '',
        description: '',
        task_id: ''
    })

    const[modalState, setModalState] = useState({
        message: ''
    })

    const tasks = props.tasks;
    const openEditForm = (e) => {
        e.preventDefault();
        const task_id = e.target.getAttribute('data-id');

        const choosenTask = tasks.filter(el=>el.id == task_id)[0];
        setEditTaskState({
            isOpened: true,
            title: choosenTask.title,
            description: choosenTask.description,
            task_id: task_id
        })
    }

    const handleEditTask = (e) => {
        e.persist();
        setEditTaskState(prevState =>({
            ...prevState,
            [e.target.name]:e.target.value
        }))

    }

    const editableTask = (task_id) => {
        if(editTaskState.isOpened == true && editTaskState.task_id == task_id){
            return true;
        } else {
            return false;
        }
    }

    const updateTask = (e) => {
        e.preventDefault();
        Task.update(editTaskState).then(response => {
            store.dispatch(SaveTasksData( response ));
            setEditTaskState({
                isOpened: false,
                title: '',
                description: '',
                task_id: ''
            })
        })
    }

    const deleteTaskModal = (e) => {
        e.preventDefault();
        const task_id = e.target.getAttribute('data-id');

        setModalState({
            message: 'Czy napewno usuńąć zadanie?',
            removeBtn: true,
            task_id: task_id
        });
        $('#exampleModal').modal('show');
    }

    const confirmRemove = (e) => {
        e.preventDefault();
        Task.delete(modalState).then(response => {
            store.dispatch(SaveTasksData( response ));
            $('#exampleModal').modal('hide');
        })
    }

    return (
        <Fragment>
            <AdminTasksView
            OpenNewTaskArea={OpenNewTaskArea}
            handleNewTaskChange={handleNewTaskChange}
            SaveNewTask={SaveNewTask}
            openEditForm={openEditForm}
            editTaskState={editTaskState}
            editableTask={editableTask}
            handleEditTask={handleEditTask}
            updateTask={updateTask}
            deleteTaskModal={deleteTaskModal}
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
    tasks: state.TasksData
  }
}

const AdminTasksControllerWrapped = connect(mapStateToProps)(AdminTasksController);

export default AdminTasksControllerWrapped;
