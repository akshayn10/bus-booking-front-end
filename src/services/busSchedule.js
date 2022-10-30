import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api'});



const getBusSchedule = () => {
    return API_URL.get('/schedule');
    
};

const addBusSchedule = async (id,data) => {
    return await API_URL.post(`/schedule/${id}`,data);
}


export default {
    getBusSchedule, addBusSchedule
}