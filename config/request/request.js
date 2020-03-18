import request from './config';

module.exports = {
    requestBarApi: params => {
        // return request.get('bar', params)
        return new Promise(resolve => {
            const data = {
                "buttons": [
                    10,
                    38,
                    -13,
                    -18
                ],
                "bars": [
                    62,
                    45,
                    62
                ],
                "limit": 230
            };
            resolve(data);
        })
    }
}