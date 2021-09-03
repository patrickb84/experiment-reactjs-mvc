import { useState } from "react";
import { Movie } from "../Models/Movie";

const MovieController = () => {
  const [movies, setMovies] = useState([]); // this is the app UI state, needs to be as close as possible to DB state

  useEffect(() => {
    setMovies(Movie.selectAll());
  }, []);

  const getIndex = (params) => {
    // params can be sort order, filter, etc.
    return movies;
  };

  const getDetails = (id) => {
    const movie = Movie.selectAll(id);
    return movie;
  };

  const handleCreate = (params) => {
    const { movie, callback, other } = params;
    Movie.add({ ...movie });
    // () => go to route
  };

  const handleUpdate = (params) => {
    //
  };

  const handleDelete = (id) => {
    // () => show alert, confirm
    Movie.delete(id);
    // go to route
  };

  const handleImageUpload = (params) => {
    //
  };

  return {
    getIndex,
    getDetails,
    handleUpdate,
    handleDelete,
    handleImageUpload,
  };
};

export default MovieController;
