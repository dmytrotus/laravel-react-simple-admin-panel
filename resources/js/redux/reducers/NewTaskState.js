const NewTaskState = (state = 0, action) => {
	switch (action.type) {

		case 'NewTaskState':
			return action.object;

		default:
			return state;
	}
};


export default NewTaskState;