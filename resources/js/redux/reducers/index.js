import ProjectsData from './ProjectsData';

import { combineReducers } from 'redux';

	const allReducers = combineReducers ({
		ProjectsData: ProjectsData,
	});

export default allReducers;