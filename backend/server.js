const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const carData = {
    vehicle: "Rollr Mini",
    speed: 72,
    battery: 88,
    fuel: 65,
    location: "Hyderabad"
};

app.get("/car", (req, res) => {
    res.json(carData);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});