const ProjectsData = (state = [], action) => {
	switch (action.type) {

		case 'ProjectsData':
			return action.array;

		default:
			return state;
	}
};


export default ProjectsData;