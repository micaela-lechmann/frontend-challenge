import axios from 'axios';
import { UserStore } from '../context/user';

export const submitForm = (user: UserStore) =>
  axios.post('http://localhost:3001/api/submit', { json: user });
