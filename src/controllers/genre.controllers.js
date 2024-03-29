import Genre from "../models/Genre.js";
import catchError from "../utils/catchError.js";

export const getAllGenres = catchError(async (req, res) => {
    const result = await Genre.findAll();

    return res.json(result)
})

export const getOneGenre = catchError(async (req, res) => {
    const { id }= req.params

    const result = await Genre.findByPk(id)

    if(!result) return res.send("Genre not found").status(404);

    return res.json(result)
})

export const createGenre = catchError(async (req, res) => {
    const result = await Genre.create(req.body)
    
    return res.status(201).json(result)
})

export const deleteGenre = catchError(async (req, res) => {
    const { id } = req.params;

    const result = await Genre.destroy({where: {id}})

    if(!result) return res.send("Genre not found").status(404);

    return res.send("Genre deleted").status(204)
})

export const updateGenre = catchError(async (req, res) => {
    const { id } = req.params;
    const newBody = req.body;

    if(!id || !newBody) return res.send("Id or newBody not found").status(404);

    const result = await Genre.update(
        newBody,
        {
            where: {id},
            returning: true
        }
    )

    return res.json(result[1][0])
})


//only to create a lot of genres
export const bulkCreatedGenres = catchError(async (req, res) => {
    const result = await Genre.bulkCreate(req.body)

    return res.status(201).json(result)
})