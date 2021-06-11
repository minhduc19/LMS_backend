
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://dory:dory@cluster0.jhwuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      	{ 
      		useNewUrlParser: true,
      		useFindAndModify: false,
    		useUnifiedTopology: true,
    		useCreateIndex: true,
      	}
    ).then(() => { console.log("db connected")});
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };