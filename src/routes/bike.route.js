const express = require("express");
const { bikeValidation } = require("../validations");
const { bikeController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create bike
router.post(
    "/create-Bike",
    validate(bikeValidation.createBikeList),
    bikeController.createBike
);

// get bike list
router.get(
    "/Bike-list",
    bikeController.getBikeList
);

// update Bike
router.put(
    "update-Bike/:BikeId",
    validate(bikeValidation.createBikeList),
    bikeController.updateBike
);

// delete Bike
router.delete(
    "/delete-Bike/:BikeId",
    bikeController.deleteBike
);

module.exports = router;