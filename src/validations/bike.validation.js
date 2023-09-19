const Joi = require("joi");

const createBikeList = {
    body : Joi.object().keys({
        Bike_Name : Joi.string().required().trim(),
        Bike_Description : Joi.string().required().trim(),
        Bike_Price : Joi.number().required(),
    }),
};

module.exports = {
    createBikeList
}