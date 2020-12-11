import React, { Fragment } from 'react';
import { store } from '@/redux/ReduxStore';
import { connect } from 'react-redux';


function UserProjectsView(props) {
    const projects = props.projects;

    return (
    	<Fragment>
    	<h2>Projekty ({projects.length})</h2>
    	<ul className="list-group">
    	{projects && projects.map(project =>
		  <li key={project.id} className="list-group-item d-flex justify-content-between">
		  	<div>
		  		<b>Nazwa projektu: </b>{project.title}<b> Opis: </b>{project.description}<b> Stworzony przez:</b> {project.author}
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

const UserProjectsViewWrapped = connect(mapStateToProps)(UserProjectsView);

export default UserProjectsViewWrapped;
	