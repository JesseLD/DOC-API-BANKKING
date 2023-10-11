const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("../api/routes/index.routes")

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"../../public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../api/views"));


app.use(routes);

module.exports = app