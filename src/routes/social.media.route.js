const express = require("express");
const { socialMediaValidation } = require("../validations");
const { socialMediaController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create Social Media
router.post(
  "/create-SocialMedia",
  validate(socialMediaValidation.createSocialMediaList),
  socialMediaController.createSocialMedia
);

// Get Social Media list
router.get(
  "/SocialMedia-list",
  socialMediaController.getSocialMediaList
);

// Update Social Media
router.put(
    "/update-SocialMedia/:SocialMediaId",
    validate(socialMediaValidation.createSocialMediaList),
    socialMediaController.updateSocialMedia
);

// Delete Social Media
router.delete(
  "/delete-SocialMedia/:SocialMediaId",
  socialMediaController.deleteSocialMedia
);



module.exports = router;