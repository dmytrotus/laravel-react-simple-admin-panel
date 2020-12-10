import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import UserView from '../View/UserView';
import { Project } from '../Models/ProjectModel';

function UserController() {

	const[projects, setProjects] = useState([]);

	useEffect(() => {
		Project.all().then(response => {
			setProjects(response);
		})
	}, []);
    
    return (
            <UserView
            projects={projects} />
    );
}


if (document.getElementById('user-component')) {
    ReactDOM.render(<UserController />, document.getElementById('user-component'));
}
