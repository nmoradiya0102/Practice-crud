const mongoose = require("mongoose");

const car_Schema = new mongoose.Schema(
    {
        Car_name : {
            type : String,
            trim : true ,
        },
        Car_description : {
            type : String,
            trim : true,
        },
        Car_Color : {
            type : String,
            trim : true,
        },
        Car_Fuel_Type : {
            type : String,
            trim : true,
        },
        Price : {
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
    versionKey : false,
}
);
const Car = mongoose.model("Car" , car_Schema);
module.exports = Car;