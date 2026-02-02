// src/services/tmdb.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // your .env key
const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Get popular movies
export const fetchPopular = () => {
  return axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY }
  });
};

// Get trending movies (weekly)
export const fetchTrending = () => {
  return axios.get(`${BASE_URL}/trending/movie/week`, {
    params: { api_key: API_KEY }
  });
};

// Search movies
export const searchMovie = (query) => {
  return axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query }
  });
};

export default axios.create({
  baseURL: BASE_URL
});
