const NewProjectState = (state = 0, action) => {
	switch (action.type) {

		case 'NewProjectState':
			return action.object;

		default:
			return state;
	}
};


export default NewProjectState;