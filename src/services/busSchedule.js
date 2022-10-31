import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api'});



const getBusSchedules = (id) => {
    return API_URL.get(`/schedule/bus/${id}`);
};

const addBusSchedule = async (data) => {
    console.log(data);
    return await API_URL.post(`/schedule`,data);
}

const deleteOneSchedule = (id) => {
    return API_URL.delete(`/schedule/${id}`);
}


export default {
    getBusSchedules, addBusSchedule,deleteOneSchedule
}