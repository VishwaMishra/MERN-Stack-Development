const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
//Rajesh-WAzojUEJDBEtuqgw

// const customMiddleware = (req, res, next) => {
//   console.log("middleware executed!!");
//   next();
// };
// app.use(customMiddleware);

// app.get("/about", customMiddleware, (req, res) => {
//   console.log("about");
//   res.send("hello world");
// });

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("Connected", () => {
  console.log("Connected to mongo");
});

mongoose.connection.on("Connected", (err) => {
  console.log("Error in connected to mongo", err);
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
