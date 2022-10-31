import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api'});

const loginAdmin= (data) => {
    return API_URL.post('/admin',data);
}


const loginCustomer= (data) => {
    return API_URL.post('/customer/login',data);
}


export default {
    loginAdmin,loginCustomer
}