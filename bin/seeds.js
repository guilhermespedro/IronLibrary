const mongoose = require("mongoose");

const Admin = require("../models/admin");

const dbName = process.env.MONGODB_URI;

mongoose
  .connect(`${dbName}`, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose.connected.");
    seedDatabase();
  })
  .catch(error => {
    console.log("Error connecting to database.");
    console.log(error);
  });

function seedDatabase() {
  const adminAccount = [
    {
      email: "guilherme123@123.com",
      name: "Guilherme",
      password: "3u50UMU1t0B0M435CR3V3rP4SSw0rD"
    },
    {
      email: "filipeprelhaz@123.com",
      name: "Filipe",
      password: "AbiBl1oT3cAd0PrelhAZ"
    },
    {
      email: "andre123@123.com",
      name: "Andre",
      password: "4melhoRdP4ssW0rDd3S3mpR3"
    }
  ];

  Admin.signUp(adminAccount)
    .then(() => {
      console.log("ADMINS_CREATED");
    })
    .catch(error => {
      console.log("Failure creating the array.");
    });
}
