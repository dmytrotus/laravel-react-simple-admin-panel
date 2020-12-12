import Passwords from '@/app/Passwords';

class TaskModel extends Passwords
{    
    constructor(headers) {
        super(headers);
    }

    async all() {
        const url = '/api/tasks/all';
        const {data: {data}, status} = await axios(url, this.headers);
        return data;
    }

    async create(state) {
        const url = '/api/tasks/create';
        const {data: {data}, status} = await axios.post(url, state, this.headers);
        return data;
    }

    async update(state) {
        const url = '/api/tasks/update';
        const {data: {data}, status} = await axios.post(url, state, this.headers);
        return data;
    }

    async delete(state) {
        const url = '/api/tasks/delete';
        const {data: {data}, status} = await axios.post(url, state, this.headers);
        return data;
    }

}

export const Task = new TaskModel();