const mongoose = require("mongoose");

const bike_Schema = new mongoose.Schema(
    {
        Bike_Name : {
            type : String,
            trim : true,
        },
        Bike_Description : {
            type : String,
            trim : true,
        },
        Bike_Price : {
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

const Bike = mongoose.model("Bike" , bike_Schema);
module.exports = Bike;