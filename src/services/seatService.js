import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api/seat'});



const getSeatsForBusSchedule = () => {
    return API_URL.get('/schedule/1');
    
};



export default {
    getSeatsForBusSchedule
}