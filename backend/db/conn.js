const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "traya_feedback3",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
