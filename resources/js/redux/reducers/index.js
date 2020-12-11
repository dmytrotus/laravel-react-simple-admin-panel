import ProjectsData from './ProjectsData';
import NewProjectState from './NewProjectState';
import TasksData from './TasksData';
import NewTaskState from './NewTaskState';

import { combineReducers } from 'redux';

	const allReducers = combineReducers ({
		ProjectsData: ProjectsData,
		NewProjectState: NewProjectState,
		TasksData: TasksData,
		NewTaskState: NewTaskState
	});

export default allReducers;