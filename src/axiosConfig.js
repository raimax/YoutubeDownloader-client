import axios from 'axios';

const axiosConfig = axios.create({
	baseURL: 'https://localhost:44318/api'
});

export default axiosConfig