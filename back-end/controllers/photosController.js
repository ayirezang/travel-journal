const photosModel = require("../models/photosModel");
const cloudinary = require("../config/cloudinary");

const createPhotos = async (req, res) => {


  
  try {
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "no photos uploaded" });
    }
    const uploadPromises = req.files.map(async (file) => {
      const cloudinaryResult = await cloud.uploads(file);
      return {
        filename: file.originalname,
        url: cloudinaryResult.url,
        size: file.size,
        mimeType: file.mimeType,
        memoryId: req.body.memoryId,
      };
    });
    const photoDataArray = await Promise.all(uploadPromises);
    const savedPhotos = await photosModel.insertMany(photoDataArray);
    res.json({
      success: true,
      message: `${savedPhotos.length} photos uploaded successfully`,
      data: savedPhotos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `error uploading photos:${error.message}`,
    });
  }
};

const getPhotoById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "error image  id is required",
      });
    }
    const photo = await photosModel.findById(id);
    if (!photo) {
      return res.status(404).json({
        success: false,
        message: "image not found",
      });
    } else {
      res.status(200).json({ message: "photo found", data: photo });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `error retrieving photo:${error.message}`,
    });
  }
};
const getAllPhotos = async (req, res) => {
  try {
    const { memoryId } = req.params;
    if (!memoryId) {
      return res.status(400).json({
        success: false,
        message: "memoryId is required",
      });
    }
    const photos = await photosModel.find({ memoryId });
    if (!photos || photos.length === 0) {
      return res.status(404).json({
        success: false,
        message: "image not found",
      });
    } else {
      res.status(200).json({ message: "photos found", data: photos });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error retrieving photos",
      error: error.message,
    });
  }
};

const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    const updatedPhoto = await photosModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedPhoto) {
      return res.status(404).json({ message: "not found" });
    } else {
      return res
        .status(200)

        .json({
          success: true,
          message: "update successful",
          data: updatedPhoto,
        });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error with update",
      error: error.message,
    });
  }
};
const deletePhotos = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    const deletedPhoto = await photosModel.findByIdAndDelete(id);
    if (!deletedPhoto) {
      return res.status(404).json({ message: "not found", data: deletedPhoto });
    } else {
      return res
        .status(200)
        .json({ message: "deleted successful", data: deletedPhoto });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error with delete",
      error: error.message,
    });
  }
};

module.exports = {
  createPhotos,
  getPhotoById,
  getAllPhotos,
  updatePhoto,
  deletePhotos,
};
