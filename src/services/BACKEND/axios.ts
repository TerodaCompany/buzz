
import axios from 'axios';



const axiosInstance = axios.create({
  baseURL: "http://10.204.194.47:8080", 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',

  },
});



export default axiosInstance;
