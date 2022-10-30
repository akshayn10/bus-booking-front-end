import axios from 'axios';

const API_URL = axios.create({baseURL:'http://localhost:8080/api'});



const createBooking = (data) => {
    console.log(data);
    return API_URL.post("/booking",data);
    
};



export default {
    createBooking
}