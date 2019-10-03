const mongoose = require("mongoose");

const Admin = require("./../models/admin");

const dbName = process.env.MONGODB_URI;
mongoose.connect(`${dbName}`);

const adminAccount = [
  {
    name: "Guilherme",
    email: "guilherme123@123.com",
    password: "3u50UMU1t0B0M435CR3V3rP4SSw0rD"
  },
  {
    name: "Filipe",
    email: "filipeprelhaz@123.com",
    password: "AbiBl1oT3cAd0PrelhAZ"
  },
  {
    name: "Andre",
    email: "andre123@123.com",
    password: "4melhoRdP4ssW0rDd3S3mpR3"
  }
];

Admin.signUp(adminAccount, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${adminAccount.length} account`);
  mongoose
    .disconnect()
    .then(() => {
      console.log(`Mongo has been disconnected`);
    })
    .catch(err => {
      console.error("Error disconnecting Mongo", err);
    });
});
