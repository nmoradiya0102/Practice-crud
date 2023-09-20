const { Vehicle } = require("../models");


const createVehicle = async(reqbody) => {
    return Vehicle.create(reqbody);
};

const getVehicleList = async() => {
    return Vehicle.find(filter)
    .populate("Bike")
    .populate("Car");
};

const getVehicleById = async(vehicleId) => {
    return Vehicle.findById({_id : vehicleId }).populate({
        path : "Bike",
        select : ["bike_name"],
    });
};

const updateVehicle = async(vehicleId,reqbody) => {
    return Vehicle.findByIdAndUpdate(vehicleId,{$set:reqbody});
};

const deleteVehicle = async(vehicleId) => {
    return Vehicle.findByIdAndDelete(vehicleId);
};

module.exports = {
    createVehicle,
    getVehicleList,
    getVehicleById,
    updateVehicle,
    deleteVehicle
}