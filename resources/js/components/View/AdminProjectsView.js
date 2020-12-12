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
    //edit project
    const openEditForm = props.openEditForm;
    const editProject = props.editProject;
    const saveEditButton = props.editProjectState && props.editProjectState.isOpened == true ? true : false;

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
    	<div className="card border-light shadow-sm">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0 rounded">
                        <thead className="thead-light">
                            <tr>
                                <th className="border-0">Nazwa projektu</th>
                                <th className="border-0">Opis</th>
                                <th className="border-0">Stworzony przez</th>
                                <th className="border-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project =>
                            <tr key={project.id}>
                                <td className="border-0">
                                   {project.title} 
                                </td>
                                <td className="border-0">
                                   {project.description}
                                </td>
                                <td className="border-0">
                                    {project.author}
                                </td>
                                <td className="border-0">
                                <button onClick={openEditForm} data-id={project.id} data-author-token={project.authorToken}
						  		className={"btn btn-sm btn-info " + (saveEditButton == true ? 'd-none':'')}>Edytuj</button>
						  		<button onClick={editProject}
						  		className={'btn btn-sm btn-info '+ (saveEditButton == true ? '':'d-none')}>Zapisz</button>
						  		<button className="btn btn-sm btn-danger ml-1">Usuń</button>
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
    projects: state.ProjectsData,
    NewProjectState: state.NewProjectState
  }
}

const AdminProjectsViewWrapped = connect(mapStateToProps)(AdminProjectsView);

export default AdminProjectsViewWrapped;
	