import { useEffect } from "react";
import Genre from "../Models/Genre";

const GenreController = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres(Genre.all());
  }, []);

  // for forms what not
  const handleUpdate = (genre) => {
    Genre.update(genre);
    setGenres(Genre.all());
  };

  // also forms?
  const handleCreate = (newGenre) => {
    Genre.create(newGenre);
    setGenres(Genre.all()); // update state?
  };

  // whoops, this is for MOVIE
  // const handleImageUpload = (file) => {
  //   // Genre.Poster(file) / Model handles file
  // };

  const handleDelete = (id) => {
    // Action, show Alert Modal, if true then handle
    setGenres(Genre.all()); // update state?
  };

  // populate forms and stuff
  const handleSelect = (id) => {
    // go to route
    //stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
    https: return Genre.select(id);
  };

  const getCollection = ({ ...params }) => {
    // params would be for sorting/filtering and stuff
    // so manipulate [genre] state, and return the collection
    return genres; // whatever
  };

  return {
    handleUpdate,
    handleCreate,
    handleDelete,
    handleSelect,
    getCollection,
  }; // return view? not sure
};

export default GenreController;
