const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

//require database
require("./mongose/mongose");

//cors config
app.use(cors());

//body parser config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
