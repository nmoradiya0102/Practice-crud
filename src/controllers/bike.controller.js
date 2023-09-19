const { bikeService } = require("../services");

// create bike
const createBike = async ( req , res ) => {
    try{
        const reqBody = req.body;
        const BikeExists = await bikeService.createBike(reqBody);
        if(!BikeExists){
            throw new Error("Something went wrong..!");
        }
        res.status(200).json({
            success : true,
            message : "Bike Create Successfully..!",
            data : { reqBody },
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

// get Bike list
const getBikeList = async (req , res) => {
    try{
        const getList = await bikeService.getBikeList();
        res.status(200).json({
            success : true,
            message : "Get Bike List Successfully..!",
            data : getList,
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

// update bike
const updateBike = async ( req , res ) => {
    try {
        const reqBody = req.body;
        const BikeId = req.params.BikeId;
        const BikeExists = await bikeService.getBikeList(BikeId);
        if (!BikeExists) {
            throw new Error("Bike not found..!");
        }
        await bikeService.updateBikeDetails(BikeId,reqBody);
        res.status(200).json({
            success : true,
            message : "Bike update successfully..!"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

// delete Bike
const deleteBike = async (req, res) => {
    try {
      const BikeId = req.params.CarId;
      const BikeExists = await bikeService.getBikeById(BikeId);
      if (!BikeExists) {
        throw new Error("Bike not found..!");
      }
      await bikeService.deleteBike(BikeId);
      res.status(200).json({
        success: true,
        message: "Bike delete successfully..!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };


module.exports = {
    createBike,
    getBikeList,
    updateBike,
    deleteBike
}