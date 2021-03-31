const Route = require("express").Router();
const upload = require("../helpers/multer");
const { uploadSingleFile } = require("../controllers/upload");

Route.post("/upload", [upload.single("avater")], uploadSingleFile);

module.exports = Route;
