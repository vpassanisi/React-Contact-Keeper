const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
