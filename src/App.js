import "./App.css";
// import { useGetMovieByMovieIdQuery } from "./redux/services/tmdbApi";
import { Navbar, Hero, CategoryList } from "./components";
import { useSelector } from "react-redux";
import AllCategories from "./components/AllCategories";

function App() {
  const { trendingMovies } = useSelector((state) => state.movie);
  return (
    <div className="app">
      <Navbar />
      <Hero />

      {/* {trendingMovies && (
        <CategoryList movieList={trendingMovies} title="Trending Movies" />
      )} */}

      <AllCategories />
    </div>
  );
}

export default App;
