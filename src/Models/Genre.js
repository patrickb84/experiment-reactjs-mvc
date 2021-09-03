// Models/Genre.js

let seed = [
  { id: 0, label: "Sci-Fi" },
  { id: 1, label: "Fantasy" },
  { id: 2, label: "Animated" },
];

const db = {
  genres: [],
};

function xdb() {
  console.log("DB: ", db);
}

// Genre
export default class Genre {
  constructor(id, label) {
    this.id = id;
    this.label = label;
  }

  static all() {
    return [...db.genres];
  } // maybe an update all? to update state?

  static select(id) {
    const g = db.genres.filter((g) => g.id === id)[0];
    return g;
  }

  static create({ ...params }) {
    const genre = new Genre(...params); // Model handles the params, so always create new here
    db.genres.push(genre);
    xdb();
  }

  static update(updatedGenre) {
    ref = db.genres.findIndex((g) => g.id === updatedGenre.id);
    db.genres[ref] = updatedGenre;
    dbx();
    // need to update in db also, consider that
  }

  static delete(id) {
    db.genres = db.genres.filter((g) => g.id !== id);
  }

  // upload poster? get/set
}

function xseed() {
  seed.map((s) => {
    db.genres.push(new Genre(s.id, s.label));
  });
  console.log("Seeded");
  xdb();
}

xseed();
