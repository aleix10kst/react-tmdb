import axios, {AxiosRequestConfig} from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    responseType: "json"
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => ({...config, params: {...config.params, api_key: ''}}))

export default axiosInstance;
