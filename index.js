const express = require("express");
const app = express();
const port = process.env.PORT ?? 4000;
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

app.use(bodyparser.json());
bodyparser.urlencoded({ extended: false });
app.use(cors({ origin: process.env.FRONT_URI, credentials: true }));

const allRoutes = require("./routes/index");
allRoutes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
