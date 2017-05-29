import config from '../config';

var Message = {
    getAll(){
        return fetch(config.endpoint + '/messages?api_token=api-token')
                    .then((response) => {
                        return response.json();
                    });
    },

    store(message){
        var formData = new FormData();
        formData.append('body', message);
        return fetch(config.endpoint + '/messages?api_token=api-token', {
                        method: 'post',
                        body: formData
                    })
                    .then((response) => {
                        return response.json();
                    });
    }
}

export default Message;
