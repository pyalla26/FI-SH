const API_KEY = "1bbdfb16ce841c8a5291db133c015819";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=10749`,
  fetchDocumentares: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=99`,
  fetchComedyShows: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
  fetchRomanceShows: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=10749`,
};

export default requests;
