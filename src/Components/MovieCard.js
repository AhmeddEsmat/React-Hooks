import "./MovieCard.css";
import { Link, useNavigate } from "react-router-dom";
import { movieCard } from "../Redux/movieReducer";
import { useSelector, useDispatch } from "react-redux";

const MovieCard = ({ name, url, description, rating }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(movieCard({ name, url, description, rating }));
    navigate(`/movie`);
  };

  return (
    <div className="movie-card">
      <Link to="/movie" onClick={handleClick}>
        <img src={url} alt="movie poster" />
        <div className="movie-info">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{rating}/10</p>
        </div>
      </Link>
    </div>
  );
};
export default MovieCard;
