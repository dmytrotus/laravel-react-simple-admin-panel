const TasksData = (state = [], action) => {
	switch (action.type) {

		case 'TasksData':
			return action.array;

		default:
			return state;
	}
};


export default TasksData;