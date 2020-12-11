import ProjectsData from './ProjectsData';
import NewProjectState from './NewProjectState';

import { combineReducers } from 'redux';

	const allReducers = combineReducers ({
		ProjectsData: ProjectsData,
		NewProjectState: NewProjectState
	});

export default allReducers;