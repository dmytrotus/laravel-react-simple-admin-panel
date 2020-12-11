import Passwords from '@/app/Passwords';

class ProjectModel extends Passwords
{    
    constructor(headers) {
        super(headers);
    }

    async all() {
        const url = '/api/projects/all';
        const {data: {data}, status} = await axios(url, this.headers);
        return data;
    }

    async create(state) {
        const url = '/api/projects/create';
        const {data: {data}, status} = await axios.post(url, state, this.headers);
        return data;
    }

}

export const Project = new ProjectModel();