import Passwords from '@/app/Passwords';

class TaskModel extends Passwords
{    
    constructor(headers) {
        super(headers);
    }

    async all() {
        const url = '/api/tasks/all';
        const {data: {message}, status} = await axios(url, this.headers);
        return message;
    }

    async create(data) {
        const url = '/api/tasks/create';
        const {data: {message}, status} = await axios.post(url, data, this.headers);
        return message;
    }

}

export const Task = new TaskModel();