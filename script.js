const mongoose = require("mongoose");
const User = require("./User");

mongoose.connection.once("open", () => {
  console.log("connected");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});

mongoose.connect("MOGO_CONNECTION_URL");

async function run() {
  try {
    const user = await User.deleteMany({ "query" });
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
run();
