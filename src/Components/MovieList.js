import MovieCard from "./MovieCard";
import "./MovieList.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const MovieList = () => {
    const [movies, setMovies] = useState([
        {
        name: "Interstellar",
        url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
        description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        rating: 8.6,
        },
        {
        name: "The God Father",
        url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        rating: 9.2,
        },
        {
        name: "Tenet",
        url: "https://m.media-amazon.com/images/M/MV5BOTU4ZmNmMTktYzRkYS00Njc1LTg3ZjQtNDY4MmM0MTE5ZjhmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        description: "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.",
        rating: 7.3,
        },
    ]);

    const [filmsName, setFilmsName] = useState("");
    const [filmsRating, setFilmsRating] = useState("");

    // const searchByName = (e) => {
    //     e.preventDefault();
    //     setMovies(
    //         filmsName.filter((movie) => movie.name.toLowerCase().includes(e.target.value.toLowerCase())
    //         )
    //     );
    // };

    // const searchByRating = (e) => {
    //     e.preventDefault();
    //     setMovies(
    //         filmsRating.filter((movie) => movie.rating >= e.target.value)
    //     );
    // };

    const changedName = (e) => {
        e.preventDefault();
        setFilmsName(e.target.value);
    }

    const changedRating = (e) => {
        e.preventDefault();
        setFilmsRating(e.target.value);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addMovie = (e) => {
        e.preventDefault();
        setMovies([
            ...movies,
            {
                name: e.target.name.value,
                url: e.target.url.value,
                description: e.target.description.value,
                rating: e.target.rating.value,
            },
        ]);
        setFilmsName([
            ...movies,
            {
                name: e.target.name.value,
                url: e.target.url.value,
                description: e.target.description.value,
                rating: e.target.rating.value,
            },
        ]);
        setFilmsRating([
            ...movies,
            {
                name: e.target.name.value,
                url: e.target.url.value,
                description: e.target.description.value,
                rating: e.target.rating.value,
            },
        ]);
        // setFilmsName([movies]);
        // setFilmsRating([movies]);
        handleClose();
    };
  

    return (
        <>
            <div className="add-movie container">
                <Button variant="primary" onClick={handleShow}>
                    Add Movie
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={addMovie}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Movie Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Movie Name" name="name"  required="required"/>
                                <Form.Label>Movie Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter Movie Image" name="url"  required="required"/>
                                <Form.Label>Movie Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Movie Description" name="description"  required="required"/>
                                <Form.Label>Movie Rating</Form.Label>
                                <Form.Control type="number" placeholder="Enter Movie Rating" name="rating"  required="required"/>
                            </Form.Group>
                            <div className="submit-btn">
                                <Button variant="primary" type="submit">Save</Button>
                            </div>
                        </Form>    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="filter-movies container">
                <input onChange={changedName} name="filmsName" placeholder="Search by name"></input>
                <input onChange={changedRating} name="filmsRating" placeholder="Filter by rating"></input>  
            </div>
            <div className="movies-list">
                {
                    movies
                    .filter(movie => (
                        movie.name.toLowerCase().indexOf(filmsName)>=0 && movie.rating.toString().toLowerCase().indexOf(filmsRating)>=0
                    ))
                    .map((movie) => (
                    <MovieCard name={movie.name} url={movie.url} description={movie.description} rating={movie.rating} />))
                }
            </div>
        </>
    );
}    
export default MovieList;