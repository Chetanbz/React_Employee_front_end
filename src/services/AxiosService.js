import axios from 'axios';
import { baseUrl } from '../config/config';

export default class AxiosService {

    Post(url, data) {
        return axios.post(baseUrl + url, data, {
            headers: {
                contentType: 'application/json'
            }
        })
    }

    get() {
        return axios.get(baseUrl, {
            headers: {
                contentType: 'application/json'
            }
        } )
    }

    Get(url) {
        return axios.get(baseUrl + url, {
            headers: {
                contentType: 'application/json'
            }
        })
    }
    put(url, data) {
        console.log(baseUrl+url + ""+ data)
        return axios.put(baseUrl+url, data, {
            headers: {
                contentType: 'application/json'
            }
        })
    }

    delete(url, data) {
        console.log(baseUrl+url + ""+ data)
        return axios.delete(baseUrl+url+data, {
            headers: {
                contentType: 'application/json'
            }
        })
    }
}