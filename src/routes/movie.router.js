import express from "express";
import { createMovie, deleteMovie, getAllMovies, getOneMovie, setActor, setDirector, setGenre, updateMovie } from "../controllers/movie.controllers.js";

const routerMovie = express.Router();

routerMovie.route("/")
    .get(getAllMovies)
    .post(createMovie)

routerMovie.route("/:id/genres")
    .post(setGenre)

routerMovie.route("/:id/directors")
    .post(setDirector)


routerMovie.route("/:id/actors")
    .post(setActor)


routerMovie.route("/:id")
    .get(getOneMovie)
    .delete(deleteMovie)
    .put(updateMovie)


export default routerMovie;