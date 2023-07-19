const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const houseRoute = require("./routes/house.routes");
const bookingRoute = require("./routes/booking.routes");

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("House Hunter App server is alive!");
});

app.use("/api/v1/user",userRoute);
app.use("/api/v1/house",houseRoute);
app.use("/api/v1/booking",bookingRoute);

module.exports = app;
