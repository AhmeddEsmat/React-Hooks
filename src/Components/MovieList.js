import MovieCard from "./MovieCard";
import List from "./List";
import "./MovieList.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies_ = useSelector((state) => state.movies.filteredMovies);
  const [movies, setMovies] = useState(List);
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
  };

  const changedRating = (e) => {
    e.preventDefault();
    setFilmsRating(e.target.value);
  };

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
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Name"
                  name="name"
                  required="required"
                />
                <Form.Label>Movie Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Image"
                  name="url"
                  required="required"
                />
                <Form.Label>Movie Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Description"
                  name="description"
                  required="required"
                />
                <Form.Label>Movie Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Movie Rating"
                  name="rating"
                  required="required"
                />
              </Form.Group>
              <div className="submit-btn">
                <Button variant="primary" type="submit">
                  Save
                </Button>
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
        <input
          onChange={changedName}
          name="filmsName"
          placeholder="Search by name"
        ></input>
        <input
          onChange={changedRating}
          name="filmsRating"
          placeholder="Filter by rating"
        ></input>
      </div>
      <div className="movies-list">
        {movies_
          .filter(
            (movie) =>
              movie.name.toLowerCase().indexOf(filmsName) >= 0 &&
              movie.rating.toString().toLowerCase().indexOf(filmsRating) >= 0
          )
          .map((movie) => (
            <MovieCard
              name={movie.name}
              url={movie.url}
              description={movie.description}
              rating={movie.rating}
            />
          ))}
      </div>
    </>
  );
};
export default MovieList;
