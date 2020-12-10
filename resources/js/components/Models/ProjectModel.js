//import Passwords from '@/app/Passwords';

class ProjectModel
{    
    /*constructor(headers) {
        super(headers);
    }*/

    async all() {
        const url = '/api/projects/all';
        const {data: {message}, status} = await axios(url);
        return message;
    }

}

export const Project = new ProjectModel();