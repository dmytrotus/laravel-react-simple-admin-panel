import React, { Fragment } from 'react';
import { store } from '@/redux/ReduxStore';
import { connect } from 'react-redux';


function UserTasksView(props) {
    const tasks = props.tasks;

    return (
    	<Fragment>
    	<h2>Tasks ({tasks.length})</h2>
        <div className="card border-light shadow-sm">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0 rounded">
                        <thead className="thead-light">
                            <tr>
                                <th className="border-0">Nazwa</th>
                                <th className="border-0">Opis</th>
                                <th className="border-0">Do projektu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task =>
                            <tr key={task.id}>
                                <td className="border-0">
                                   {task.title} 
                                </td>
                                <td className="border-0">
                                   {task.description}
                                </td>
                                <td className="border-0">
                                    {task.project}
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
    projects: state.ProjectsData
  }
}

const UserTasksViewWrapped = connect(mapStateToProps)(UserTasksView);

export default UserTasksViewWrapped;