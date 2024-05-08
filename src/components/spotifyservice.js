import axios from 'axios';

const API_KEY = 'd65d099f81mshfb46b6e8c0d8ddfp16ee3bjsnc801f6cbf524';

const axiosInstance = axios.create({
  baseURL: 'https://spotify23.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'spotify23.p.rapidapi.com',
    'useQueryString': true
  }
});

export const fetchUserLibrary = async () => {
  try {
    const response = await axiosInstance.get('/me/tracks');
    return response.data;
  } catch (error) {
    console.error('Error fetching user library:', error);
    throw error;
  }
};
