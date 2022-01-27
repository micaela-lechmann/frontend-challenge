import axios from 'axios';

const getColors = () => axios.get<string[]>('http://localhost:3001/api/colors');

export default getColors;
