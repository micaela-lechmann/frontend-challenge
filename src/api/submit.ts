import ky from 'ky';
import { UserStore } from '../context/user';

export const submitForm = (user: UserStore) =>
  ky.post('http://localhost:3001/api/submit', { json: user });
