import Actor from "./Actor.js";
import Director from "./Director.js";
import Genre from "./Genre.js";
import Movie from "./Movie.js";



// table pivot: movie_genre
Movie.belongsToMany(Genre, { through: "movieGenre"})
Genre.belongsToMany(Movie, { through: "movieGenre"})

// table pivot: movie_director
Movie.belongsToMany(Director, { through: "movieDirector"})
Director.belongsToMany(Movie, { through: "movieDirector"})

// table pivot: movie_actor
Movie.belongsToMany(Actor, { through: "movieActor"})
Actor.belongsToMany(Movie, { through: "movieActor"})