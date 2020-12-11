import React, { Fragment } from 'react';
import { store } from '@/redux/ReduxStore';
import { connect } from 'react-redux';


function UserTasksView(props) {
    const tasks = props.tasks;

    return (
    	<Fragment>
    	<h2>Tasks ({tasks.length})</h2>
    	<ul className="list-group">
    	{tasks.map(task =>
		  <li key={task.id} className="list-group-item d-flex justify-content-between">
		  	<div>
		  		<b>Nazwa: </b>{task.title}<b> Opis: </b>{task.description} <b>Do projektu:</b> {task.project}
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
    projects: state.ProjectsData
  }
}

const UserTasksViewWrapped = connect(mapStateToProps)(UserTasksView);

export default UserTasksViewWrapped;