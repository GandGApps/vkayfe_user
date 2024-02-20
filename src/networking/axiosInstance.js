import axios from 'axios';
import {BaseUrl} from '../constants';
import {checkTokens} from '../utils';

const axiosInstance = axios.create({
  baseURL: BaseUrl,
  timeout: 100000,
});

axiosInstance.interceptors.request.use(
  async config => {
    let token = await checkTokens();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
