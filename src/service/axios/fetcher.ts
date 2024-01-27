import axios from 'axios';

const BASE_API_URL = 'http://localhost:3001';

export const publicApi = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
