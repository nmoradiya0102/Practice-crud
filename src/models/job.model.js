const mongoose = require("mongoose");
const job_Schema = new mongoose.Schema(
    {
        Job_title : {
            type : String,
            trim : true ,
        },
        Qualifications :{
            type : String,
            trim : true ,
        },
        Company : {
            type : String,
            trim : true,
        },
        Working_Conditions : {
            type : String,
            trim : true,
        },
        Location : {
            type : String,
            trim : true,
        },
        Salary : {
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
const Job = mongoose.model("Job" , job_Schema);
module.exports = Job;