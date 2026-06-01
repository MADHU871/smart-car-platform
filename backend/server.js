require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const connectDB = require("./config/db");

const Trip = require("./models/Trip");
const GPS = require("./models/GPS");
const Health = require("./models/Health");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

const SECRET_KEY =
  process.env.JWT_SECRET ||
  "smartcarsecret";

/*
====================================
CAR DATA
====================================
*/

const carData = {

  vehicle: "Rollr Mini",

  speed: 72,

  battery: 88,

  fuel: 65,

  location: "Hyderabad"

};

/*
====================================
LOGIN API
====================================
*/

app.post("/login", (req, res) => {

  const { username, password } =
    req.body;

  if (

    username === "admin" &&

    password === "admin123"

  ) {

    const token = jwt.sign(

      {
        username
      },

      SECRET_KEY,

      {
        expiresIn: "1h"
      }

    );

    return res.json({
      token
    });

  }

  return res.status(401).json({

    message:
      "Invalid Credentials"

  });

});

/*
====================================
JWT MIDDLEWARE
====================================
*/

const authenticateToken = (

  req,
  res,
  next

) => {

  const token =
    req.headers.authorization;

  if (!token) {

    return res.status(401).json({

      message:
        "No Token Provided"

    });

  }

  try {

    jwt.verify(
      token,
      SECRET_KEY
    );

    next();

  } catch {

    return res.status(401).json({

      message:
        "Invalid Token"

    });

  }

};

/*
====================================
CAR API
====================================
*/

app.get(

  "/car",

  authenticateToken,

  (req, res) => {

    res.json(carData);

  }

);

/*
====================================
TRIPS API
====================================
*/

app.get(

  "/trips",

  async (req, res) => {

    try {

      const trips =
        await Trip.find();

      res.json(trips);

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  }

);

/*
====================================
GPS API
====================================
*/

app.get(

  "/gps",

  async (req, res) => {

    try {

      const gps =
        await GPS.find();

      res.json(gps);

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  }

);

/*
====================================
HEALTH API
====================================
*/

app.get(

  "/health",

  async (req, res) => {

    try {

      const health =
        await Health.find();

      res.json(health);

    } catch (error) {

      res.status(500).json({

        message:
          error.message

      });

    }

  }

);

/*
====================================
SERVER
====================================
*/

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});