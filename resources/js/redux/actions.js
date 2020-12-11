export const SaveProjectsData = (array) =>{
	return {
		type: 'ProjectsData',
		array: array
	}
}
export const SetNewProjectState = (object) =>{
	return {
		type: 'NewProjectState',
		object: object
	}
}
export const SaveTasksData = (array) =>{
	return {
		type: 'TasksData',
		array: array
	}
}
export const SetNewTaskState = (object) =>{
	return {
		type: 'NewTaskState',
		object: object
	}
}