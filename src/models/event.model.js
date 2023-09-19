const mongoose = require("mongoose");

const event_Schema = new mongoose.Schema(
    {
        Event_type : {
            type : String,
            trim : true,
        },
        Event_title : {
            type : String,
            trim : true,
        },
        Event_date : {
            type : String,
            trim : true,
        },
        Event_location : {
            type : String,
            trim : true,
        },
        Event_description : {
            type : String,
            trim : true,
        },
        Event_Capacity : {
            type : Number,
            default : 0,
        },
        is_active  :  {
            type  :  Boolean,
            default  :  true,
        },
},
{
    timestamps : true,
    versionKey : false,
}
);
const Event = mongoose.model("Event" , event_Schema);
module.exports = Event;