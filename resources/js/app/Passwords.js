class Passwords
{
	constructor() {

		const token = document.querySelector('meta[name=user-api-token]').getAttribute('content');
		this.token = token;
        this.headers = { headers : {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
        }};
    }

}

export default Passwords;