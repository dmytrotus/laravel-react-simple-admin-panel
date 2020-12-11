class TaskModel
{    


    async all() {
        const url = '/api/tasks/all';
        const {data: {message}, status} = await axios(url);
        return message;
    }

    async create(data) {
        const url = '/api/tasks/create';
        const {data: {message}, status} = await axios.post(url, data);
        return message;
    }

}

export const Task = new TaskModel();