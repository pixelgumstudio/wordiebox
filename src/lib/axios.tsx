import axios from 'axios';

export default axios.create({
    baseURL: 'https://wordie-box-backend.onrender.com/api/v1/'
});