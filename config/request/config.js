import axios from 'axios';
import Qs from 'qs';

const serverBaseUrl = 'http://pb-api.herokuapp.com/';

// 创建axios实例
function createAxiosInstance(callback) {
    let request = {};
    let instance = axios.create({
        baseURL: serverBaseUrl,
        timeout: 5000,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        transformRequest: [function (data) {
            data = Qs.stringify(data);
            return data;
        }]
    });

    callback && callback(instance);

    request.get = function (url, data) {
        return new Promise((resolve, reject) => {
            instance.get(url, { params: data}).then(response => {
                resolve(response.data.result);
            }).catch(function (msg) {
                reject(msg);
            });
        })
    };

    request.post = function (url, data) {
        return new Promise((resolve, reject) => {
            instance.post(url, data).then(response => {
                resolve(response);
            }).catch(function (msg) {
                reject(msg);
            });
        })
    };

    return request;
}

function configRequest(instance) {
    instance.interceptors.request.use(config => {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
}

let axiosInstance = createAxiosInstance(configRequest);

export default axiosInstance;