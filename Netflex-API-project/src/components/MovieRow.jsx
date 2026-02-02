import Slider from "react-slick";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }) {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: true,
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <Slider {...settings}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
}
