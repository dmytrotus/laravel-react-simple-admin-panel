import React, { useState, useEffect } from 'react';
import AdminTasksView from '../View/AdminTasksView';
import { Task } from '../Models/TaskModel';
import { store } from '@/redux/ReduxStore';
import { SaveTasksData } from '@/redux/actions';
import { SetNewTaskState } from '@/redux/actions';

function AdminTasksController() {

	useEffect(() => {
		Task.all().then(response => {
            store.dispatch(SaveTasksData( response ));
		})
	}, []);

    const[newTaskState, setNewTaskState] = useState({
        isOpened: false,
        title: '',
        description: ''
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
                description: '' 
            })
        } else {
            setNewTaskState({
               isOpened: false,
                title: '',
                description: '' 
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

    return (
            <AdminTasksView
            OpenNewTaskArea={OpenNewTaskArea}
            handleNewTaskChange={handleNewTaskChange}
            SaveNewTask={SaveNewTask} />
    );
}


export default AdminTasksController;