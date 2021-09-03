const { DbContext } = require("../dbContext");

class Movie {
  constructor(id, title, year) {
    this.id = id;
    this.title = title;
    this.year = year;
  }

  static selectAll() {
    return DbContext.movies;
  }

  static select(id) {
    return DbContext.movies.filter((m) => m.id == id)[0];
  }

  static add(newMovie) {
    const { title, year } = newMovie;
    const movie = new Movie(DbContext.movieIdx++, title, year);
    DbContext.movies.push(movie);
  }

  // static update({ ...updateParams }) {
  //   console.log({ ...updateParams })
  // }

  static delete(id) {
    DbContext.movies = DbContext.movies.filter((movie) => movie.id != id);
  }
}

exports.Movie = Movie;
