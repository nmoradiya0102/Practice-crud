const Joi = require("joi");

const createSocialMediaList = {
    body: Joi.object().keys({
        User_Posts : Joi.string().required().trim(),
        User_Bio : Joi.string().required().trim(),
        User_Followers : Joi.number().required(),
        User_Following : Joi.number().required(),
    }),
};

module.exports = {
    createSocialMediaList
}