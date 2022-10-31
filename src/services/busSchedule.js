import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api'});



const getBusSchedule = () => {
    return API_URL.get('/schedule');
    
};

const addBusSchedule = async (data) => {
    return await API_URL.post(`/schedule`,data);
}

const searchSchedule = async (data) => {
    console.log(data);
    return await API_URL.post(`/schedule/search`,data);
}


export default {
    getBusSchedule, addBusSchedule, searchSchedule
}