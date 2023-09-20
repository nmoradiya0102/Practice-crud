const mongoose = require("mongoose");

const vehicle_Schema = new mongoose.Schema(
    {
        vehicle_maker : {
            type : String,
            trim : true
        },
        vehicle_model : {
            type : String,
            trim : true
        },
        vehicle_year : {
            type : Number,
            default : 2000
        },
        vehicle_Color : {
            type : String,
            default : true,
        },
        vehicle_description : {
            type : String,
            trim : true
        },
        Bike: {
            type: mongoose.Types.ObjectId,
            ref: "Bike",
        },
        Car: {
            type: mongoose.Types.ObjectId,
            ref: "Car",
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false,
        toJSON: {
            transform: function (doc, data) {
              if (data?.vehicle_image) {
                data.vehicle_image = `${config.base_url}vehicle_image/${data.vehicle_image}`;
              }
            },
          },
    }
)

const vehicle = mongoose.model("Vehicle",vehicle_Schema);
module.exports = vehicle