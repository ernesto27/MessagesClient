import config from '../config';

var User = {
    getAll(){
        return fetch(config.endpoint + '/users?api_token=api-token')
                    .then((response) => {
                        return response.json();
                    });
    }
}

export default User;
