const { SocialMediaService } = require("../services");

// create Social Media
const createSocialMedia = async (req, res) => {
  try {
    const reqBody = req.body;
    const SocialExists = await SocialMediaService.createSocialMedia(reqBody);
    if (!SocialExists) {
      throw new Error("Something went wrong..!");
    }
    res.status(200).json({
      success: true,
      message: "Social media account create successfully..!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

// Get Social Media list
const getSocialMediaList = async (req, res) => {
  try {
   const getList = await SocialMediaService.getSocialMediaList();
   res.status(200).json({
      success: true,
      message: "Get Social media account list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    });
  }
};


//  Update Social Media
const updateSocialMedia = async (req, res) => {
    try {
      const reqBody = req.body;
      const SocialId = req.params.SocialId;
      const SocialExists = await SocialMediaService.getSocialMediaById(SocialId);
     if (!SocialExists) {
        throw new Error("Social media account not found!");
     }
     await SocialMediaService.updateSocialMedia(SocialId,reqBody);
        res.status(200).json({
          success: true,
          message: "Social media account update successfully!",
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    });
  }
};

// Delete Social Media
const deleteSocialMedia = async (req, res) => {
  try {
    const SocialId = req.params.SocialId;
    const SocialExists = await SocialMediaService.getSocialMediaById(SocialId);
    if (!SocialExists) {
      throw new Error("Social media account not found!");
    }
    await SocialMediaService.deleteSocialMedia(SocialId);

    res.status(200).json({
      success: true,
      message: "Social media account delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    });
  }
};


module.exports = {
    createSocialMedia,
    getSocialMediaList,
    updateSocialMedia,
    deleteSocialMedia
};