import "./App.css";
import { useGetMovieByMovieIdQuery } from "./redux/services/tmdbApi";
import { Navbar } from "./components";

function App() {
  // const { data, isFetching, isError } = useGetMovieByMovieIdQuery("spiderman");
  // if (isFetching) return "Loading";
  // if (isError) return "Error";
  // console.log(data);
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}

export default App;
