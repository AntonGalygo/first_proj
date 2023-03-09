const numberOfFilms = +prompt("How much films did you watch?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const a = prompt("Enter last watched film", '');
const b = prompt("Rate this film", '');
const c = prompt("Enter last watched film", '');
const d = prompt("Rate this film", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
