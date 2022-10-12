import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../Pages/Home";

export default ({ name, url, description, rating }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="movie-card">
        <img src={url} alt="movie poster" />
        <div className="movie-info">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{rating}/10</p>
        </div>
      </div>
      <Link to="/" element={Home}>
        <button>Back to home</button>
      </Link>
    </div>
  );
};
