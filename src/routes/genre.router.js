import express from "express";
import { createGenre, deleteGenre, getAllGenres, getOneGenre, updateGenre } from "../controllers/genre.controllers.js";

const routerGenre = express.Router();

routerGenre.route("/")
    .get(getAllGenres)
    .post(createGenre)

routerGenre.route("/:id")
    .get(getOneGenre)
    .delete(deleteGenre)
    .put(updateGenre)



export default routerGenre;