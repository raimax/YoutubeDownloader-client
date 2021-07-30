import axios from 'axios';

const axiosConfig = axios.create({
	baseURL: 'https://youtubedownloaderapi20210730113218.azurewebsites.net/api'
});

export default axiosConfig