import "./MovieCard.css"

const MovieCard = ({name,url,description,rating}) => {
    return (
        <div className="movie-card">
            <img src={url} alt="movie poster" />
            <div className="movie-info">
                <h4>{name}</h4>
                <p>{description}</p>
                <p>{rating}/10</p>
            </div>
        </div>
    );
};
export default MovieCard;