const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/upload",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, info) => {
    if (err) {
      console.log(`can't connect to the database`);
    } else {
      console.log("connection to database sucessful");
    }
  }
);
