const express = require("express");
const validate = require("../middlewares/validate");
const { vehicleValidation } = require("../validations");
const { vehicleController } = require("../controllers");
const router = express.Router()

router.post(
    "/create-vehicle",
    validate(vehicleValidation.createVehicle),
    vehicleController.createVehicle
)

router.put(
    "/update-vehicle/:vehicleId",
    validate(vehicleValidation.createVehicle),
    vehicleController.updateVehicle
)

router.get(
    "/list",
    vehicleController.getVehicleList
)

router.delete(
    "/delete-vehicle/:vehicleId",
    vehicleController.deleteVehicle
)


module.exports = router;