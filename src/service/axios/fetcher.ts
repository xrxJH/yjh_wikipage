import { BASE_API_URL } from '@/constants/path';
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
