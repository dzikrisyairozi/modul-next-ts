import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '13ab43d1b624f8fdacb3c497a65e5a0e';

// export const getPopularMovies = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};

// https://api.themoviedb.org/3//movie/popular?api_key=13ab43d1b624f8fdacb3c497a65e5a0e