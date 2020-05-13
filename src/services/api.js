import axios from 'axios';
import { getSupportedVideoFormats } from 'expo/build/AR';

const api = axios.create({
  baseURL: '',
});

export default api;
