import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api'});



const getAllBuses = () => {
    return API_URL.get('/bus');
    
};

const addBus = (data) => {
    return API_URL.post('/bus',data);
}

const deleteBus = (id) => {
    return API_URL.delete(`/bus/${id}`);
}

export default {
    getAllBuses, addBus, deleteBus
}