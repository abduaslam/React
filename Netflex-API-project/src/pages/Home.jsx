import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import MovieRow from "../components/MovieRow.jsx";
import { fetchPopular } from "../services/tmdb"; // ✅ note: no .jsx

export default function Home() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular().then(res => setPopular(res.data.results));
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <MovieRow title="Popular Movies" movies={popular} />
    </>
  );
}
