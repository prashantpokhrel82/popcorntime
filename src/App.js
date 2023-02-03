import "./App.css";
import { useGetMovieByMovieIdQuery } from "./redux/services/tmdbApi";

function App() {
  const { data, isFetching, isError } = useGetMovieByMovieIdQuery("spiderman");
  if (isFetching) return "Loading";
  if (isError) return "Error";
  console.log(data);
  return <div className="App">App</div>;
}

export default App;
