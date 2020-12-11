import React, { Fragment } from 'react';
import { store } from '@/redux/ReduxStore';
import { connect } from 'react-redux';


function AdminProjectsView(props) {
    const projects = props.projects;
    const OpenNewProjectArea = props.OpenNewProjectArea;
    const NewProjectState = props.NewProjectState;
    const handleNewProjectChange = props.handleNewProjectChange;
    const saveBtnEnabled = props.NewProjectState && props.NewProjectState.title.length > 0 ? '' : 'disabled';
    const SaveNewProject = props.SaveNewProject;

    return (
    	<Fragment>
    	<div className="d-flex flex-wrap">
    		<div className="col-12 col-md-6 col-lg-3 m-1">
	    		<button onClick={OpenNewProjectArea} className="btn btn-info m-1 w-100">
	    		{NewProjectState.isOpened == false ? 'Dodaj nowy projekt' : 'Zamknij'}
	    		</button>
	    		<button onClick={SaveNewProject} className={"btn btn-success m-1 w-100 "+saveBtnEnabled}>Zapisz</button>
	    	</div>
	    	<div className={"col-12 col-md-5 col-lg-8 m-1 "
	    	+(NewProjectState.isOpened == false ? 'invisible' : '')}>
		    	<div className="input-group">
		    		<input onChange={handleNewProjectChange} name="title"
		    		className="form-control m-1" type="text" placeholder="Nazwa projektu"
		    		value={NewProjectState.title || ''} />
		    	</div>
		    	<div className="input-group">
		    		<input onChange={handleNewProjectChange} name="description"
		    		 className="form-control m-1" type="text" placeholder="Opis projektu"
		    		 value={NewProjectState.description || ''} />
		    	</div>
		    </div>
	    </div>
    	<h2>Projekty ({projects.length})</h2>
    	<ul className="list-group">
    	{projects && projects.map(project =>
		  <li key={project.id} className="list-group-item d-flex justify-content-between">
		  	<div>
		  		<b>Nazwa projektu: </b>{project.title}<b> Opis: </b>{project.description}<b> Stworzony przez:</b> {project.author}
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
    projects: state.ProjectsData,
    NewProjectState: state.NewProjectState
  }
}

const AdminProjectsViewWrapped = connect(mapStateToProps)(AdminProjectsView);

export default AdminProjectsViewWrapped;
	