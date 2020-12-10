import React, { Fragment } from 'react';

function UserView(props) {
    const projects = props.projects;

    return (
    	<Fragment>
    	<h2>Projekty</h2>
    	<ul className="list-group">
    	{projects.map(project =>
		  <li key={project.id} className="list-group-item">
		  	<b>Nazwa projektu: </b>{project.title}<b> Opis: </b>{project.description}
		  </li>
		)}
		</ul>
        </Fragment>
    );
}

export default UserView;
