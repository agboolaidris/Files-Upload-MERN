const Upload = require("../models/upload");

exports.uploadSingleFile = async (req, res) => {
  try {
    if (!req.file)
      res
        .status(400)
        .json({ msg: "image most be either jpg,png or jpeg format" });

    const data = new Upload({
      pathname: req.file.path,
    });

    const response = await data.save();
    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
