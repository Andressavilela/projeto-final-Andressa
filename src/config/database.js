const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;

const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  connect,
};