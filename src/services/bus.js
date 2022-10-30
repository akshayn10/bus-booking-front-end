import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api'});



const getAllBuses = () => {
    return API_URL.get('/bus');
    
};

const addBus = (data) => {
    return API_URL.post('/bus',data);
}


export default {
    getAllBuses, addBus
}