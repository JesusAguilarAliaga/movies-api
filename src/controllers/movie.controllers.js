import Actor from "../models/Actor.js";
import Director from "../models/Director.js";
import Genre from "../models/Genre.js";
import Movie from "../models/Movie.js";
import catchError from "../utils/catchError.js";

export const getAllMovies = catchError(async (req, res) => {
    const result = await Movie.findAll({include: [Genre, Director, Actor]});

    return res.json(result);
})

export const getOneMovie = catchError(async (req, res) => {
    const { id } = req.params
    const result = await Movie.findByPk(id, {include: [Genre, Director, Actor]})

    if (!result) return res.send("Movie not found").status(404);

    return res.json(result);
})

export const createMovie = catchError(async (req, res) => {
    /* const { name, image, synopsis, releaseYear, genres, directors, actors } = req.body;

    const newMovie = {
        name,
        image,
        synopsis,
        releaseYear
    } */

    //almacenando los datos genres, directors y actors
    /* if (genres) {
        const movieGenres = await Movie.setGenres(genres);
        newMovie.Genres = movieGenres;
    }

    if (directors) {
        const movieDirectors = await Movie.setDirectors(directors);
        newMovie.Directors = movieDirectors;
    }

    if (actors) {
        const movieActors = await newMovie.setActors(actors);
        newMovie.Actors = movieActors;
    } */

    const result = await Movie.create(req.body);

    return res.status(201).json({
        message: "Movie created",
        data: result
    });
})

export const deleteMovie = catchError( async(req, res) => {
    const { id } = req.params;

    const result = await Movie.destroy({where: {id}});

    if(!result) return res.send("Movie not Found").status(404);

    return res.send("Movie deleted").status(204);
})

export const updateMovie = catchError(async (req, res) => {
    const { id } = req.params;
    const newBody = req.body

    const idMovie = await Movie.findByPk(id);

    if(!idMovie) return res.send("Movie not Found").status(404);

    const result = await Movie.update(
        newBody,
        {
            where: { id },
            returning: true
        }
    )

    return res.json({
        message: "Movie updated",
        data: result[1][0]
    })
})

export const setGenre = catchError(async (req, res) => {
    //obteniendo el id de la pelicula y buscandola en la base de datos
    const { id } = req.params;
    const movie = await Movie.findByPk(id);

    //comprobando si la pelicula existe
    if(!movie) return res.send("Movie not found").status(404);

    // seteando los generos a la pelicula
    await movie.setGenres(req.body)

    const allGenres = await movie.getGenres()

    return res.json({
        message: "Genre added",
        data: allGenres
    })
})

export const setDirector = catchError(async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);

    if(!movie) return res.send("Movie not found").status(404);

    await movie.setDirectors(req.body)

    const allDirectors = await movie.getDirectors()

    return res.json({
        message: "Director added",
        data: allDirectors
    })
})

export const setActor = catchError(async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);

    if(!movie) return res.send("Movie not found").status(404);

    await movie.setActors(req.body);

    const allActors = await movie.getActors();

    return res.json({
        message: "Actor added",
        data: allActors
    })
})