import ky from 'ky';

export const getColors = () =>
  ky.get('http://localhost:3001/api/colors').json<string[]>();
