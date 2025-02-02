const express = require("express");
const app = express();
const port = process.env.PORT ?? 4000;
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./middleware/downloadFileDrive.middleware"); // Google Drive API

app.use(bodyparser.json());
bodyparser.urlencoded({ extended: false });
app.use(cors({ origin: process.env.FRONT_URI, credentials: true }));

const allRoutes = require("./routes/index");
allRoutes(app);
app.get("/", async (req, res) => {
  try {
    const apilocation = await fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=90e559ce20d0431eb3d3d31f560e913d"
    );
    const location = await apilocation.json();
    res.json(location);
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
