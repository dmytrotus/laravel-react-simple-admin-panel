import React, { Fragment } from 'react';
import { store } from '@/redux/ReduxStore';
import { connect } from 'react-redux';


function AdminTasksView(props) {
    const tasks = props.tasks;
    const OpenNewTaskArea = props.OpenNewTaskArea;
    const NewTaskState = props.NewTaskState;
    const handleNewTaskChange = props.handleNewTaskChange;
    const saveBtnEnabled = props.NewTaskState && props.NewTaskState.title.length > 0 &&
    props.NewTaskState.project_id.length > 0 ? '' : 'disabled';
    const SaveNewTask = props.SaveNewTask;
    const projects = props.projects;
    //edit task
    const openEditForm = props.openEditForm;
    const handleEditTask = props.handleEditTask;
    const editableTask = props.editableTask;
    const editTaskState = props.editTaskState;
    const updateTask = props.updateTask;
    //delete task
    const deleteTaskModal = props.deleteTaskModal;


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
                    <select onChange={handleNewTaskChange} className="form-control m-1" name="project_id">
                       <option value=''>Wybierz projekt</option>
                       {projects.map(pr =>
                       <option key={pr.id} value={pr.id}>{pr.title}</option>
                       )}
                    </select>
                </div>
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
        <div className="card border-light shadow-sm">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0 rounded">
                        <thead className="thead-light">
                            <tr>
                                <th className="border-0 w-25">Nazwa</th>
                                <th className="border-0 w-25">Opis</th>
                                <th className="border-0 w-25">Do projektu</th>
                                <th className="border-0 w-25"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task =>
                            <tr key={task.id}>
                                <td className="border-0">
                                {(editableTask(task.id) == false ?
                                (<span>{task.title}</span>):
                                (<input onChange={handleEditTask} name="title"
                                className="form-control" type="text" placeholder="Nazwa projektu"
                                value={editTaskState.title || ''} />)
                                 )}
                                </td>
                                <td className="border-0">
                                    {(editableTask(task.id) == false ?
                                   (<span>{task.description}</span>):
                                   (<input onChange={handleEditTask} name="description"
                                    className="form-control" type="text" placeholder="Opis projektu"
                                    value={editTaskState.description || ''} />)
                                   )}
                                </td>
                                <td className="border-0">
                                    {task.project}
                                </td>
                                <td className="border-0">
                                  <button onClick={openEditForm} data-id={task.id}
                                  className={"btn btn-sm btn-info " + (editableTask(task.id) == true ? 'd-none':'')}>Edytuj</button>
                                  <button onClick={updateTask}
                                  className={'btn btn-sm btn-success '+ (editableTask(task.id) == true ? '':'d-none')}>Zapisz</button>
                                  <button onClick={deleteTaskModal} data-id={task.id}
                                   className="btn btn-sm btn-danger ml-1">Usuń</button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

const mapStateToProps = state => {
  return {
    tasks: state.TasksData,
    NewTaskState: state.NewTaskState,
    projects: state.ProjectsData
  }
}

const AdminTasksViewWrapped = connect(mapStateToProps)(AdminTasksView);

export default AdminTasksViewWrapped;