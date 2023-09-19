const { vehicleService } = require("../services");

/** create Vehicle */
const createVehicle = async (req, res) => {
  try {
    const reqBody = req.body;
    const vehicleExist = await vehicleService.createVehicle(reqBody);
    if (!vehicleExist) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Vehicle create successfully..!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message:  error.message
    });
  }
};

/** Get Vehicle list */
const getVehicleList = async (req, res) => {
  try {
   const getList = await vehicleService.getVehicleList();
   res.status(200).json({
      success: true,
      message: "Get Vehicle list successfully..!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    });
  }
};


/** Update Vehicle */
const updateVehicle = async (req, res) => {
    try {
      const reqBody = req.body;
      const vehicleId = req.params.vehicleId;
      const vehicleExist = await vehicleService.getEventById(vehicleId);
     if (!vehicleExist) {
        throw new Error("Vehicle not found..!");
     }
     await vehicleService.updateVehicle(vehicleId,reqBody);
        res.status(200).json({
          success: true,
          message: "Vehicle update successfully..!",
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    });
  }
};

/** Delete Vehicle */
const deleteVehicle = async (req, res) => {
  try {
    const vehicleId = req.params.vehicleId;
    const vehicleExist = await vehicleService.getVehicleById(vehicleId);
    if (!vehicleExist) {
      throw new Error("Vehicle not found..!");
    }
    await vehicleService.deleteVehicle(vehicleId);

    res.status(200).json({
      success: true,
      message: "Vehicle delete successfully..!",
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    });
  }
};


module.exports = {
    createVehicle,
    getVehicleList,
    updateVehicle,
    deleteVehicle
};