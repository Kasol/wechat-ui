import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: '//localhost:3000/wechat/api/',
    timeout: 1000,
    withCredentials: true,
    // mode: 'cors',
    // headers: { 'X-CSRF-TOKEN': 'kasol' }/
    headers: {'content-type': 'application/json'}
});
export default axiosInstance;
