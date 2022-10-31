import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api'});



const loginAdmin= (data) => {
    return API_URL.post('/admin',data);
}


export default {
    loginAdmin
}