import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import AdminView from '../View/AdminView';
import { Project } from '../Models/ProjectModel';

function AdminController() {
    
    const[projects, setProjects] = useState([]);

	useEffect(() => {
		Project.all().then(response => {
			setProjects(response);
		})
	}, []);

    return (
            <AdminView
            projects={projects} 
            />
    );
}


if (document.getElementById('admin-component')) {
    ReactDOM.render(<AdminController />, document.getElementById('admin-component'));
}
