const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api", require("./route"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
