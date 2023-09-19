const Joi = require("joi");

const createCarList = {
    body: Joi.object().keys({
        Car_name : Joi.string().required().trim(),
        Car_description : Joi.string().required().trim(),
        Car_Color : Joi.string().required().trim(),
        Car_Fuel_Type : Joi.string().required().trim(),
        Price : Joi.number().required(),
    }),
};

module.exports = {
    createCarList
}