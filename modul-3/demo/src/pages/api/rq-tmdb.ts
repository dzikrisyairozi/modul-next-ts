export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "13ab43d1b624f8fdacb3c497a65e5a0e";

// export const getPopularMovies = async (page: number) => {
//   const response = await fetch(
//     `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
//   );
//   const data = await response.json();
//   return data;
// };

export const getPopularMovies = async (page: number, id?: number) => {
    const endpoint = id ? `movie/${id}` : 'movie/popular';
    const response = await fetch(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    return data;
  };
  