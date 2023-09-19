const Joi = require("joi")

const createVehicle = {
    body: Joi.object().keys({
        vehicle_maker : Joi.string().required().trim(),
        vehicle_model : Joi.string().required().trim(),
        vehicle_year : Joi.number().required(),
        vehicle_Color : Joi.string().required().trim(),
        vehicle_description : Joi.string().required().trim(),
    })
}

module.exports = {
    createVehicle
}