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