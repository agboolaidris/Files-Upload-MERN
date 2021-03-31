exports.uploadSingleFile = async (req, res) => {
  try {
    if (!req.file)
      res
        .status(400)
        .json({ msg: "image most be either jpg,png or jpeg format" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
