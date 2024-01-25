import axios from 'axios';

const BASE_API_URL = 'http://localhost:3000';

export const publicApi = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
