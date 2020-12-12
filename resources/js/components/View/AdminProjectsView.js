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
    const handleEditProject = props.handleEditProject;
    const editableProject = props.editableProject;
    const editProjectState = props.editProjectState;
    const updateProject = props.updateProject;
    //delete project
    const deleteProjectModal = props.deleteProjectModal;

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
                                <th className="border-0 w-25">Nazwa projektu</th>
                                <th className="border-0 w-25">Opis</th>
                                <th className="border-0 w-25">Stworzony przez</th>
                                <th className="border-0 w-25"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project =>
                            <tr key={project.id}>
                                <td className="border-0">
                                {(editableProject(project.id) == false ?
                                (<span>{project.title}</span>):
                                (<input onChange={handleEditProject} name="title"
					    		className="form-control" type="text" placeholder="Nazwa projektu"
					    		value={editProjectState.title || ''} />)
                                 )}
                                </td>
                                <td className="border-0">
                                	{(editableProject(project.id) == false ?
                                   (<span>{project.description}</span>):
                                   (<input onChange={handleEditProject} name="description"
						    		className="form-control" type="text" placeholder="Opis projektu"
						    		value={editProjectState.description || ''} />)
                                   )}
                                </td>
                                <td className="border-0">
                                    {project.author}
                                </td>
                                <td className="border-0 text-center">
                                <button onClick={openEditForm} data-id={project.id} data-author-token={project.authorToken}
						  		className={"btn btn-sm btn-info " + (editableProject(project.id) == true ? 'd-none':'')}>Edytuj</button>
						  		<button onClick={updateProject}
						  		className={'btn btn-sm btn-success '+ (editableProject(project.id) == true ? '':'d-none')}>Zapisz</button>
						  		<button onClick={deleteProjectModal} data-id={project.id} data-author-token={project.authorToken}
						  		 className="btn btn-sm btn-danger ml-1">Usuń</button>
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
	