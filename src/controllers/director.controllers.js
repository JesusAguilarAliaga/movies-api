import Director from "../models/Director.js";
import catchError from "../utils/catchError.js";

export const getAllDirectors = catchError(async (req, res) => {
    const result = await Director.findAll();

    return res.json(result);
})

export const getOneDirector = catchError(async (req, res) => {
    const { id } = req.params
    const result = await Director.findByPk(id)

    if (!result) return res.send("Director not found").status(404);

    return res.json(result);
})

export const createDirector = catchError(async (req, res) => {
    const result = await Director.create(req.body);

    return res.status(201).json(result);
})

export const deleteDirector = catchError( async(req, res) => {
    const { id } = req.params;

    const result = await Director.destroy({where: {id}});

    if(!result) return res.send("Director not Found").status(404);

    return res.send("Director deleted").status(204);
})

export const updateDirector = catchError(async (req, res) => {
    const { id } = req.params;
    const newBody = req.body

    const idDirector = await Director.findByPk(id);

    if(!idDirector) return res.send("Director not Found").status(404);

    const result = await Director.update(
        newBody,
        {
            where: { id },
            returning: true
        }
    )

    return res.json(result[1][0])
})


//only to create a lot of directors
export const bulkCreatedDirectors = catchError(async (req, res) => {
    const result = await Director.bulkCreate(req.body)

    return res.status(201).json(result)
})