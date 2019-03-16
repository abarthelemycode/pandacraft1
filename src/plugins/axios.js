import axios from 'axios';
import { config } from '../config';

const baseURL = config.apiUrl;

const api = axios.create({
  baseURL,
  timeout: 5000,
  // Header configuration
  headers: {
    'Access-Control-Allow-Headers': 'application/json',
  },
});

// interceptors configuration
api.interceptors.request.use(
  // Do something before request is sent
  conf => conf,
  // Do something with request error
  err => Promise.reject(err),
);


export default api;
