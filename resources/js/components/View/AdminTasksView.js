import React, { Fragment } from 'react';


function AdminTasksView(props) {
    const tasks = [];

    return (
    	<Fragment>
    	<h2>Tasks</h2>
    	<ul className="list-group">
    	{tasks.map(task =>
		  <li key={task.id} className="list-group-item d-flex justify-content-between">
		  	<div>
		  		<b>Nazwa projektu: </b>{task.title}<b> Opis: </b>{task.description}
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

export default AdminTasksView;
