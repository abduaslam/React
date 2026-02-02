import { IMG_URL } from "../services/tmdb";

export default function MovieCard({ movie }) {
  return (
    <img
      className="movie-card"
      src={`${IMG_URL}${movie.poster_path}`}
      alt={movie.title}
    />
  );
}
