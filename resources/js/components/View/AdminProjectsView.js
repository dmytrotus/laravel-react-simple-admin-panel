import React, { Fragment } from 'react';
import { store } from '@/redux/ReduxStore';
import { connect } from 'react-redux';


function AdminProjectsView(props) {
    const projects = props.projects;

    return (
    	<Fragment>
    	<h2>Projekty</h2>
    	<ul className="list-group">
    	{projects && projects.map(project =>
		  <li key={project.id} className="list-group-item d-flex justify-content-between">
		  	<div>
		  		<b>Nazwa projektu: </b>{project.title}<b> Opis: </b>{project.description}
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
    projects: state.ProjectsData
  }
}

const AdminProjectsViewWrapped = connect(mapStateToProps)(AdminProjectsView);

export default AdminProjectsViewWrapped;
	