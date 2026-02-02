import { useEffect, useState } from "react";
import { fetchTrending, IMG_URL } from "../services/tmdb";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchTrending().then(res => {
      const randomMovie = res.data.results[
        Math.floor(Math.random() * res.data.results.length)
      ];
      setMovie(randomMovie);
    });
  }, []);

  if (!movie) return null;

  return (
    <header
      style={{
        backgroundImage: `url(${IMG_URL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        color: "white",
        padding: "2rem",
        minHeight: "60vh"
      }}
    >
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </header>
  );
}
