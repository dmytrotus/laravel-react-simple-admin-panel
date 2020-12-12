import React, { Fragment } from 'react';
import { store } from '@/redux/ReduxStore';
import { connect } from 'react-redux';


function UserProjectsView(props) {
    const projects = props.projects;

    return (
    	<Fragment>
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
    projects: state.ProjectsData
  }
}

const UserProjectsViewWrapped = connect(mapStateToProps)(UserProjectsView);

export default UserProjectsViewWrapped;
	