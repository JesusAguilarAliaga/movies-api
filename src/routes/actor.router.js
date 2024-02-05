import express from "express";
import { createActor, deleteActor, getAllActors, getOneActor, updateActor } from "../controllers/actor.controllers.js";

const routerActor = express.Router();

routerActor.route("/")
    .get(getAllActors)
    .post(createActor)

routerActor.route("/:id")
    .get(getOneActor)
    .delete(deleteActor)
    .put(updateActor)


export default routerActor;