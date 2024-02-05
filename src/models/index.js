import Actor from "./Actor.js";
import Director from "./Director.js";
import Genre from "./Genre.js";
import Movie from "./Movie.js";



// table pivot: movie_genre
Movie.belongsToMany(Genre, { through: "movie_genre"})
Genre.belongsToMany(Movie, { through: "movie_genre"})

// table pivot: movie_director
Movie.belongsToMany(Director, { through: "movie_director"})
Director.belongsToMany(Movie, { through: "movie_director"})

// table pivot: movie_actor
Movie.belongsToMany(Actor, { through: "movie_actor"})
Actor.belongsToMany(Movie, { through: "movie_actor"})