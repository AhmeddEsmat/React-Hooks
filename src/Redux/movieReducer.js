// import List from "../Components/List";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      name: "Interstellar",
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      rating: 8.6,
    },
    {
      name: "The God Father",
      url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
    },
    {
      name: "Tenet",
      url: "https://m.media-amazon.com/images/M/MV5BOTU4ZmNmMTktYzRkYS00Njc1LTg3ZjQtNDY4MmM0MTE5ZjhmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      description:
        "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.",
      rating: 7.3,
    },
  ],
  filteredMovies: [
    {
      name: "Interstellar",
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      rating: 8.6,
    },
    {
      name: "The God Father",
      url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
    },
    {
      name: "Tenet",
      url: "https://m.media-amazon.com/images/M/MV5BOTU4ZmNmMTktYzRkYS00Njc1LTg3ZjQtNDY4MmM0MTE5ZjhmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      description:
        "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.",
      rating: 7.3,
    },
  ],
  movieData: {
    name: "",
    url: "",
    description: "",
    rating: "",
  },
};

const movieReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    filter: (state, action) => {
      console.log(action.payload.name + "And " + action.payload.size);
      if (action.payload.name && action.payload.size) {
        state.filteredMovies = state.movies.filter((movie) => {
          return (
            movie.name
              .toLowerCase()
              .includes(action.payload.name.toLowerCase()) &&
            movie.size.includes(action.payload.size)
          );
        });
        state.nameAction = action.payload.name;
        state.sizeAction = action.payload.size;
      } else if (action.payload.name) {
        state.filteredMovies = state.movies.filter((movie) => {
          return movie.name
            .toLowerCase()
            .includes(action.payload.name.toLowerCase());
        });
        state.nameAction = action.payload.name;
        state.sizeAction = action.payload.size;
      } else if (action.payload.size) {
        state.filteredMovies = state.filteredMovies.filter((movie) => {
          return movie.size.includes(action.payload.size);
        });
        state.sizeAction = action.payload.size;
        state.nameAction = action.payload.name;
      } else {
        state.filteredMovies = state.movies;
        state.sizeAction = action.payload.size;
        state.nameAction = action.payload.name;
      }
    },
    movieCard: (state, action) => {
      console.log(action.payload);
      state.movieData.name = action.payload.name;
      state.movieData.url = action.payload.url;
      state.movieData.description = action.payload.description;
      state.movieData.rating = action.payload.rating;
    },
  },
});

export const { filter, movieCard } = movieReducer.actions;
export default movieReducer.reducer;
