const { SocialMedia } = require("../models");

//Create Social Media Account
const createSocialMedia = async (reqBody) => {
  return SocialMedia.create(reqBody);
};

// Get Social Media Account list
const getSocialMediaList = async () => {
  return SocialMedia.find();
};

// Get Social Media Account details by id
const getSocialMediaById = async (SocialId) => {
  return SocialMedia.findById(SocialId);
};

// Update Social Media Account
const updateSocialMedia = async (SocialId,reqBody) => {
  return SocialMedia.findByIdAndUpdate(SocialId,{$set:reqBody});
};

//  Delete Social Media Account
const deleteSocialMedia = async (SocialId) => {
  return SocialMedia.findByIdAndDelete(SocialId);
};


module.exports = {
    createSocialMedia,
    getSocialMediaList,
    getSocialMediaById,
    updateSocialMedia,
    deleteSocialMedia
};