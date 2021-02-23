const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

//setting up cors
app.use(cors());

//setting up bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//setting up route
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
