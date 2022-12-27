const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

// const Tour = require("../natoursAPI/models/tourModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successful");
  });

// const testTour = new Tour({
//   name: "Tampa",
//   rating: 5,
//   price: 500,
// });

// testTour.save().then((doc) => {
//   console.log(doc);
// });
const port = process.env.PORT || 8000;
app.listen(port, () => {});
