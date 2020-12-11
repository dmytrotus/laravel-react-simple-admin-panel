import React, { Fragment } from 'react';
import { store } from '@/redux/ReduxStore';
import { connect } from 'react-redux';


function AdminTasksView(props) {
    const tasks = props.tasks;
    const OpenNewTaskArea = props.OpenNewTaskArea;
    const NewTaskState = props.NewTaskState;
    const handleNewTaskChange = props.handleNewTaskChange;
    const saveBtnEnabled = props.NewTaskState && props.NewTaskState.title.length > 0 ? '' : 'disabled';
    const SaveNewTask = props.SaveNewTask;

    return (
    	<Fragment>
        <div className="d-flex flex-wrap">
            <div className="col-12 col-md-6 col-lg-3 m-1">
                <button onClick={OpenNewTaskArea} className="btn btn-info m-1 w-100">
                {NewTaskState.isOpened == false ? 'Dodaj nowy task' : 'Zamknij'}
                </button>
                <button onClick={SaveNewTask} className={"btn btn-success m-1 w-100 "+saveBtnEnabled}>Zapisz</button>
            </div>
            <div className={"col-12 col-md-5 col-lg-8 m-1 "
            +(NewTaskState.isOpened == false ? 'invisible' : '')}>
                <div className="input-group">
                    <input onChange={handleNewTaskChange} name="title"
                    className="form-control m-1" type="text" placeholder="Nazwa zadania"
                    value={NewTaskState.title || ''} />
                </div>
                <div className="input-group">
                    <input onChange={handleNewTaskChange} name="description"
                     className="form-control m-1" type="text" placeholder="Opis zadania"
                     value={NewTaskState.description || ''} />
                </div>
            </div>
        </div>
    	<h2>Tasks ({tasks.length})</h2>
    	<ul className="list-group">
    	{tasks.map(task =>
		  <li key={task.id} className="list-group-item d-flex justify-content-between">
		  	<div>
		  		<b>Nazwa: </b>{task.title}<b> Opis: </b>{task.description} <b>Stworzony przez:</b> {task.author}
		  	</div>
		  	<div>
		  		<button className="btn btn-sm btn-info">Edytuj</button>
		  		<button className="btn btn-sm btn-danger ml-1">Usuń</button>
		  	</div>
		  </li>
		)}
		</ul>
        </Fragment>
    );
}

const mapStateToProps = state => {
  return {
    tasks: state.TasksData,
    NewTaskState: state.NewTaskState
  }
}

const AdminTasksViewWrapped = connect(mapStateToProps)(AdminTasksView);

export default AdminTasksViewWrapped;