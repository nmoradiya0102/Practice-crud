const express = require("express");
const bikeRoutes = require("./bike.route");
const carRoutes = require("./car.route");
const socialMediaRoutes = require("./social.media.route");
const eventRoute = require("./event.route");
const vehicleRoute = require("./vehicle.route");
const jobRoute = require("./job.route");

const router = express.Router();

router.use("/bike" , bikeRoutes);
router.use("/car" , carRoutes);
router.use("/Social Media" , socialMediaRoutes);
router.use("/event" , eventRoute);
router.use("/vehicle" , vehicleRoute);
router.use("/job" , jobRoute);


module.exports = router;