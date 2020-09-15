const mongoose = require("mongoose");

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(process.env.connectionString, {
      useNewUrlParser: true,
    });

    console.log("connected to db");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = InitiateMongoServer;
