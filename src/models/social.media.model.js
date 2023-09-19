const mongoose = require("mongoose");
const social_media_Schema = new mongoose.Schema(
    {
        User_Posts : {
            type : String,
            trim : true,
        },
        User_Bio : {
            type : String,
            trim : true,
        },
        User_Followers : {
            type : Number,
            trim : true,
        },
        User_Following : {
            type : Number,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps : true,
        versionkey : false,
    }
);

const SocialMedia = mongoose.model("SocialMedia" , social_media_Schema);
module.exports = SocialMedia;