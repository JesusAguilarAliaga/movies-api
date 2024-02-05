import express from "express";
import routerMovie from "./movie.router.js";
import routerActor from "./actor.router.js";
import routerGenre from "./genre.router.js";
import routerDirector from "./director.router.js";

const router = express.Router();

router.use("/movies", routerMovie)
router.use("/actors", routerActor)
router.use("/genres", routerGenre)
router.use("/directors", routerDirector)

export default router;