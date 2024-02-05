import express from "express";
import { createDirector, deleteDirector, getAllDirectors, getOneDirector, updateDirector } from "../controllers/director.controllers.js";

const routerDirector = express.Router();

routerDirector.route("/")
    .get(getAllDirectors)
    .post(createDirector)


routerDirector.route("/:id")
    .get(getOneDirector)
    .delete(deleteDirector)
    .put(updateDirector)

export default routerDirector;