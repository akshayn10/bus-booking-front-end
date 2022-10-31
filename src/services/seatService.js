import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api/seat'});



const getSeatsForBusSchedule = (id) => {
    return API_URL.get(`/schedule/${id}`);
    
};



export default {
    getSeatsForBusSchedule
}