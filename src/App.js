import "./App.css";
import Home from "./Pages/Home";
import Movie from "./Components/Movie";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  // const [movies, setMovies] = useState(List);
  const movie = useSelector((state) => state.movies.movieData);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie"
            element={
              <Movie
                name={movie.name}
                url={movie.url}
                description={movie.description}
                rating={movie.rating}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
