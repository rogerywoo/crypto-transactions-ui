import axios from "axios";

import {API_URL} from '../constant/Url';

class CryptoTransactionDataService{
    retrieveAllTransactions(productType){
        //return axios.get(`${API_URL}/users/${name}/todos`);
        console.log (`hello`);
        console.log (`${API_URL}/transaction/${productType}`);
        console.log (`goodbye`);
        return axios.get(`${API_URL}/transaction/${productType}`);
    }

    retrieveAllUnReconciledTransactions(productType){
        //return axios.get(`${API_URL}/users/${name}/todos`);
        return axios.get(`${API_URL}/users/${productType}/todos`);
    }

    retrieveTransaction(productType, id){
        return axios.get(`${API_URL}/users/${productType}/todos/${id}`);
    }


    retrieveAllLedgers(name){
        // return axios.put(`${API_URL}/users/${name}/todos/${todo.id}`, todo);
        return axios.put(`${API_URL}/users/${name}/todos/`);
    }


    addTodo(name, todo){
        // return axios.post(`${API_URL}/users/${name}/todos`, todo);
        return axios.post(`${API_URL}/users/${name}/todos`, todo);        
    }

    login(username, password){
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        return axios.get(`${API_URL}/basicauth`, {headers:{authorization: basicAuthHeader}});
    }

    jwtLogin(username, password){
        return axios.post(`${API_URL}/authenticate`, {username, password});
    }

}

export default new CryptoTransactionDataService();