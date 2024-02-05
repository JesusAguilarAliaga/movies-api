import Actor from "../models/Actor.js";
import catchError from "../utils/catchError.js";

export const getAllActors = catchError(async (req, res) => {
    const result = await Actor.findAll();

    return res.json(result);
})

export const getOneActor = catchError(async (req, res) => {
    const { id } = req.params
    const result = await Actor.findByPk(id)

    if (!result) return res.send("Actor not found").status(404);

    return res.json(result);
})

export const createActor = catchError(async (req, res) => {
    const { firstName, lastName, nationality, image, birthday } = req.body;

    const newBody = {
        firstName,        
        lastName,
        nationality,
        image,
        birthday
    }

    const result = await Actor.create(newBody);

    return res.status(201).json({
        message: "Actor created",
        data: result
    });
})

export const deleteActor = catchError( async(req, res) => {
    const { id } = req.params;

    const result = await Actor.destroy({where: {id}});

    if(!result) return res.send("Actor not Found").status(404);

    return res.send("Actor deleted").status(204);
})

export const updateActor = catchError(async (req, res) => {
    const { id } = req.params;
    const newBody = req.body

    const idActor = await Actor.findByPk(id);

    if(!idActor) return res.send("Actor not Found").status(404);

    const result = await Actor.update(
        newBody,
        {
            where: { id },
            returning: true
        }
    )

    return res.json({
        message: "Actor updated",
        data: result[1][0]
    })
})